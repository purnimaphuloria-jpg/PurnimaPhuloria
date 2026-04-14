import { SchoolEvent } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar as CalendarIcon, MapPin, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'motion/react';

interface EventCardProps {
  event: SchoolEvent;
  key?: string | number;
}

export function EventCard({ event }: EventCardProps) {
  const categoryColors: Record<string, string> = {
    Academic: 'bg-blue-100 text-blue-700 border-blue-200',
    Sports: 'bg-green-100 text-green-700 border-green-200',
    Cultural: 'bg-purple-100 text-purple-700 border-purple-200',
    Holiday: 'bg-orange-100 text-orange-700 border-orange-200',
    PTM: 'bg-red-100 text-red-700 border-red-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row">
          <div className="bg-primary/5 p-6 flex flex-col items-center justify-center min-w-[120px] border-r border-slate-100">
            <span className="text-3xl font-serif font-bold text-primary">
              {format(event.date, 'dd')}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">
              {format(event.date, 'MMM')}
            </span>
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-2">
              <Badge variant="outline" className={`${categoryColors[event.category]} font-medium`}>
                {event.category}
              </Badge>
              {event.isImportant && (
                <div className="flex items-center text-amber-600 text-xs font-bold uppercase tracking-tighter">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Important
                </div>
              )}
            </div>
            
            <CardTitle className="text-xl mb-2 font-sans font-bold text-slate-800">
              {event.title}
            </CardTitle>
            
            <CardDescription className="text-slate-600 mb-4 line-clamp-2">
              {event.description}
            </CardDescription>
            
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2 text-slate-400" />
                {format(event.date, 'EEEE, yyyy')}
              </div>
              {event.location && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                  {event.location}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
