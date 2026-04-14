/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CalendarSection } from './components/CalendarSection';
import { EventList } from './components/EventList';
import { GraduationCap, Bell, Menu, User } from 'lucide-react';
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';
import { motion } from 'motion/react';
import { mockEvents } from './data/events';
import { format } from 'date-fns';

export default function App() {
  const nextImportantEvent = mockEvents
    .filter(e => e.isImportant && e.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
              Campus<span className="text-primary">Events</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Calendar</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Academics</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Sports</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-slate-500">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-500 md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <Separator orientation="vertical" className="h-6 hidden sm:block" />
            <Button variant="outline" className="hidden sm:flex items-center gap-2 rounded-full">
              <User className="w-4 h-4" />
              Portal Login
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-primary text-white p-8 md:p-12 shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-6">
                Featured Event
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                {nextImportantEvent?.title || "Welcome to Campus Events"}
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {nextImportantEvent?.description || "Stay updated with all the important dates, meetings, and celebrations at our school."}
              </p>
              
              {nextImportantEvent && (
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-white/60 font-bold tracking-wider">Date</span>
                    <span className="text-xl font-semibold">{format(nextImportantEvent.date, 'MMMM dd, yyyy')}</span>
                  </div>
                  <Separator orientation="vertical" className="h-10 bg-white/20 hidden sm:block" />
                  <div className="flex flex-col">
                    <span className="text-xs uppercase text-white/60 font-bold tracking-wider">Location</span>
                    <span className="text-xl font-semibold">{nextImportantEvent.location || "Main Campus"}</span>
                  </div>
                  <Button className="bg-white text-primary hover:bg-slate-100 font-bold px-8 py-6 rounded-xl ml-auto">
                    Add to Calendar
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <GraduationCap className="w-full h-full -rotate-12 translate-x-1/4 translate-y-1/4" />
          </div>
        </section>

        {/* Calendar Section */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">Interactive Calendar</h2>
              <p className="text-slate-500">Browse events by date and see what's happening daily.</p>
            </div>
          </div>
          <CalendarSection />
        </section>

        <Separator className="bg-slate-200" />

        {/* Full Event List */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">Upcoming Events</h2>
            <p className="text-slate-500">A comprehensive list of all scheduled activities.</p>
          </div>
          <EventList />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">CampusEvents</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering our school community with timely information and seamless event management.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parent Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Handbook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Office</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to get weekly updates on school activities.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm flex-1 focus:ring-1 focus:ring-primary"
              />
              <Button size="sm">Join</Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © 2026 Campus Events. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
