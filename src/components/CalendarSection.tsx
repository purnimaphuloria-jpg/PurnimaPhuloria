import * as React from 'react';
import { Calendar } from './ui/calendar';
import { SchoolEvent } from '../types';
import { mockEvents } from '../data/events';
import { isSameDay, format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { EventCard } from './EventCard';
import { ScrollArea } from './ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';

export function CalendarSection() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const eventsOnSelectedDate = React.useMemo(() => {
    if (!date) return [];
    return mockEvents.filter((event) => isSameDay(event.date, date));
  }, [date]);

  const eventDates = mockEvents.map((e) => e.date);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <Card className="lg:col-span-5 border-none shadow-sm h-fit">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Event Calendar</CardTitle>
        </CardHeader>
        <CardContent className="p-0 sm:p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border-none w-full flex justify-center"
            modifiers={{
              hasEvent: eventDates,
            }}
            modifiersStyles={{
              hasEvent: {
                fontWeight: 'bold',
                textDecoration: 'underline',
                color: 'var(--color-primary)',
              },
            }}
          />
        </CardContent>
      </Card>

      <div className="lg:col-span-7 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">
            {date ? format(date, 'MMMM d, yyyy') : 'Select a date'}
          </h3>
          <span className="text-sm text-slate-500 font-medium">
            {eventsOnSelectedDate.length} {eventsOnSelectedDate.length === 1 ? 'Event' : 'Events'}
          </span>
        </div>

        <ScrollArea className="h-[450px] pr-4">
          <AnimatePresence mode="wait">
            {eventsOnSelectedDate.length > 0 ? (
              <div className="space-y-4">
                {eventsOnSelectedDate.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-[300px] text-slate-400 bg-white/50 rounded-xl border-2 border-dashed border-slate-200"
              >
                <p className="text-lg font-medium">No events scheduled for this day</p>
                <p className="text-sm">Check other dates or the full list below</p>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollArea>
      </div>
    </div>
  );
}
