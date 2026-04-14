import * as React from 'react';
import { SchoolEvent, EventCategory } from '../types';
import { mockEvents } from '../data/events';
import { EventCard } from './EventCard';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

export function EventList() {
  const [filter, setFilter] = React.useState<EventCategory | 'All'>('All');
  const [search, setSearch] = React.useState('');

  const filteredEvents = React.useMemo(() => {
    return mockEvents
      .filter((event) => {
        const matchesCategory = filter === 'All' || event.category === filter;
        const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) ||
                            event.description.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }, [filter, search]);

  const categories: (EventCategory | 'All')[] = ['All', 'Academic', 'PTM', 'Sports', 'Cultural', 'Holiday'];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Tabs defaultValue="All" className="w-full md:w-auto" onValueChange={(v) => setFilter(v as any)}>
          <TabsList className="bg-white border border-slate-200 p-1 h-auto flex-wrap justify-start">
            {categories.map((cat) => (
              <TabsTrigger 
                key={cat} 
                value={cat}
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 rounded-md transition-all"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input
            placeholder="Search events..."
            className="pl-10 bg-white border-slate-200 focus:ring-primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-100">
            <p className="text-slate-400 font-medium">No events found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
