import React from 'react'
import { LayoutDashboard, CalendarDays, CalendarClock, PanelLeft } from 'lucide-react'

export default function HeroMockup() {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] flex items-center justify-center select-none font-sans">
      {/* ── Background Dashboard Layer (Larger, more prominent scale) ── */}
      <div className="absolute top-0 left-0 w-[86%] h-[86%] rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-md flex overflow-hidden transition-all duration-300 hover:shadow-lg z-10">
        {/* Left App Sidebar */}
        <div className="w-8 border-r border-[var(--border)] bg-gray-50 flex flex-col items-center text-gray-400">
          {/* Menu Toggle Button (PanelLeft) aligned to header height */}
          <div className="h-8 border-b border-[var(--border)] flex items-center justify-center w-full">
            <PanelLeft size={13} className="text-gray-400 hover:text-black transition-colors cursor-pointer" />
          </div>

          {/* Navigation Items (First 3 from the frontend repo) */}
          <div className="flex flex-col items-center gap-3.5 w-full py-3">
            <LayoutDashboard size={13} className="text-gray-400 hover:text-black transition-colors cursor-pointer" />
            <div className="p-1 bg-gray-200/60 rounded-md">
              <CalendarDays size={13} className="text-[var(--foreground)]" />
            </div>
            <CalendarClock size={13} className="text-gray-400 hover:text-black transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-white">
          {/* Header */}
          <div className="h-8 flex items-center justify-between px-3 border-b border-[var(--border)] text-[9px] sm:text-[10px]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--foreground)]">Sábado, 27 De Junio</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[var(--foreground)] text-white font-medium px-2 py-0.5 rounded text-[8px] flex items-center justify-center">
                Nueva Cita
              </span>
              <span className="w-4 h-4 rounded-full bg-gray-200 text-gray-600 font-bold flex items-center justify-center text-[8px]">
                R
              </span>
            </div>
          </div>

          {/* Professionals columns header */}
          <div className="grid grid-cols-[38px_1fr_1fr] border-b border-[var(--border)] text-[8px] sm:text-[9px]">
            <div className="border-r border-[var(--border)] bg-gray-50"></div>
            <div className="h-5 px-2 border-r border-[var(--border)] flex items-center text-gray-400 font-semibold truncate">
              Roberto Mancilla
            </div>
            <div className="h-5 px-2 text-gray-400 font-semibold truncate flex items-center">
              Diego García
            </div>
          </div>

          {/* Agenda Grid (Symmetric mathematical spacing, stretching using 1fr rows) */}
          <div className="flex-1 flex min-w-0 overflow-y-auto no-scrollbar relative">
            
            {/* Time Axis Column */}
            <div className="w-[38px] grid grid-cols-1 grid-rows-[repeat(9,1fr)] border-r border-[var(--border)] text-[7px] sm:text-[8px] text-gray-400 font-mono pr-1 py-1 h-full">
              {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'].map((time) => (
                <div key={time} className="flex items-center justify-end pr-1 leading-none">
                  {time}
                </div>
              ))}
            </div>

            {/* Grid Area */}
            <div className="flex-1 grid grid-cols-2 relative h-full">
              
              {/* Column 1: Roberto Mancilla (Left side - white background grid, light blue cards) */}
              <div className="border-r border-[var(--border)] bg-white grid grid-cols-1 grid-rows-[repeat(9,1fr)] py-1 relative h-full">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border-b border-gray-100 h-full"></div>
                ))}

                {/* Layered Booking Cards positioned via CSS Grid Row Span (scalable & responsive) */}
                
                {/* Appointment 1: 09:00 - 10:00 (Spans Row 1 to Row 3) */}
                <div className="col-start-1 col-end-2 row-start-1 row-end-3 mx-1 my-0.5 bg-[#E0F2FE] border border-[#BAE6FD] rounded p-1 flex flex-col justify-between shadow-sm z-10">
                  <div className="leading-tight">
                    <h5 className="font-bold text-[var(--muted)] text-[8px] sm:text-[9.5px] truncate leading-none">Corte de Pelo</h5>
                    <span className="text-[6.5px] text-gray-500 truncate block mt-0.5 font-medium">Roberto Mancilla • 09:00 - 10:00</span>
                  </div>
                  <span className="self-end px-1 py-0.2 rounded bg-white text-emerald-600 font-bold border border-emerald-100 text-[5px] sm:text-[6px] leading-none">
                    Confirmada
                  </span>
                </div>

                {/* Appointment 2: 11:00 - 12:30 (Spans Row 5 to Row 8) */}
                <div className="col-start-1 col-end-2 row-start-5 row-end-8 mx-1 my-0.5 bg-[#E0F2FE] border border-[#BAE6FD] rounded p-1 flex flex-col justify-between shadow-sm z-10">
                  <div className="leading-tight">
                    <h5 className="font-bold text-[var(--muted)] text-[8px] sm:text-[9.5px] truncate leading-none">Afeitado + Corte</h5>
                    <span className="text-[6.5px] text-gray-500 truncate block mt-0.5 font-medium">Diego Garcia • 11:00 - 12:30</span>
                  </div>
                  <span className="self-end px-1 py-0.2 rounded bg-white text-emerald-600 font-bold border border-emerald-100 text-[5px] sm:text-[6px] leading-none">
                    Confirmada
                  </span>
                </div>

                {/* Appointment 3: 12:30 - 13:30 (Spans Row 8 to Row 10) */}
                <div className="col-start-1 col-end-2 row-start-8 row-end-10 mx-1 my-0.5 bg-[#E0F2FE] border border-[#BAE6FD] rounded p-1 flex flex-col justify-between shadow-sm z-10">
                  <div className="leading-tight">
                    <h5 className="font-bold text-[var(--muted)] text-[8px] sm:text-[9.5px] truncate leading-none">Corte de Pelo</h5>
                    <span className="text-[6.5px] text-gray-500 truncate block mt-0.5 font-medium">Carlos Brambila • 12:30 - 13:30</span>
                  </div>
                  <span className="self-end px-1 py-0.2 rounded bg-white text-emerald-600 font-bold border border-emerald-100 text-[5px] sm:text-[6px] leading-none tracking-wide">
                    Confirmada
                  </span>
                </div>

              </div>

              {/* Column 2: Diego García (Right side - white background grid, empty) */}
              <div className="bg-white grid grid-cols-1 grid-rows-[repeat(9,1fr)] py-1 h-full">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border-b border-gray-100 h-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Foreground WhatsApp Chat Layer (Taller layout + Pulsing online micro-animation) ── */}
      <div 
        className="absolute bottom-0 right-0 w-[58%] h-[97%] rounded-2xl border border-[var(--border)] bg-gradient-to-b from-[#efeae2] to-[#e5ddd5] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 z-20"
        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
      >
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white p-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
              {/* Scissors/Barber Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 sm:w-4.5 sm:h-4.5">
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <line x1="20" y1="4" x2="8.12" y2="15.88" />
                <line x1="14.47" y1="14.48" x2="20" y2="20" />
                <line x1="8.12" y1="8.12" x2="12" y2="12" />
              </svg>
            </div>
            <div>
              <h4 className="text-[10px] sm:text-xs font-semibold leading-none">Run Barber (Bot)</h4>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[8px] sm:text-[9px] text-white/70 leading-none">en línea</span>
              </div>
            </div>
          </div>
          {/* Mock Call Icons */}
          <div className="flex items-center gap-3 text-white/80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.281-5.117-3.574-6.398-6.398l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </div>
        </div>

        {/* WhatsApp Chat Area (No scrollbars) */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2 text-[9px] sm:text-[11px] leading-tight no-scrollbar">
          {/* Incoming Msg (Client) */}
          <div className="flex justify-end">
            <div className="bg-[#d9fdd3] text-black max-w-[80%] rounded-lg px-2.5 py-1.5 shadow-sm rounded-tr-none flex flex-col">
              <p>Hola, quiero agendar mañana</p>
              <div className="flex items-center justify-end gap-1 mt-0.5 self-end">
                <span className="text-[7px] text-gray-500/80">10:04 AM</span>
                <span className="text-sky-500 text-[10px] leading-none">✓✓</span>
              </div>
            </div>
          </div>

          {/* Outgoing Msg (Bot) */}
          <div className="flex justify-start">
            <div className="bg-white text-black max-w-[85%] rounded-lg px-2.5 py-1.5 shadow-sm rounded-tl-none space-y-1 flex flex-col">
              <p className="font-semibold text-[#075E54] text-[8px] sm:text-[9.5px]">Run Barber (Bot)</p>
              <p className="font-medium">¡Hola! Bienvenido a Run Barber.</p>
              <p>Estos son los servicios disponibles:</p>
              <p className="font-mono text-[8px] sm:text-[10px] bg-gray-50 p-1.5 rounded border border-gray-100 leading-normal">
                1. Corte de cabello<br />
                2. Afeitado de barba
              </p>
              <p className="text-[7.5px] text-gray-500 font-semibold">*Responde con el número o nombre del servicio.*</p>
              <div className="flex justify-end mt-0.5 self-end">
                <span className="text-[7px] text-gray-400">10:04 AM</span>
              </div>
            </div>
          </div>

          {/* Incoming Msg (Client) */}
          <div className="flex justify-end">
            <div className="bg-[#d9fdd3] text-black max-w-[80%] rounded-lg px-2.5 py-1.5 shadow-sm rounded-tr-none flex flex-col">
              <p>Corte de cabello</p>
              <div className="flex items-center justify-end gap-1 mt-0.5 self-end">
                <span className="text-[7px] text-gray-500/80">10:05 AM</span>
                <span className="text-sky-500 text-[10px] leading-none">✓✓</span>
              </div>
            </div>
          </div>

          {/* Outgoing Msg (Bot) */}
          <div className="flex justify-start">
            <div className="bg-white text-black max-w-[85%] rounded-lg px-2.5 py-1.5 shadow-sm rounded-tl-none space-y-1 flex flex-col">
              <p className="font-semibold text-[#075E54] text-[8px] sm:text-[9.5px]">Run Barber (Bot)</p>
              <p>Horarios para <span className="font-semibold">Corte de cabello</span> el sábado 27:</p>
              <p className="font-mono text-[8px] sm:text-[10px] bg-gray-50 p-1.5 rounded border border-gray-100 leading-normal">
                1. 11:30 AM (Diego)<br />
                2. 12:30 PM (Roberto)
              </p>
              <p className="text-[7.5px] text-gray-500 font-semibold">*Responde con el número o escribe la hora.*</p>
              <div className="flex justify-end mt-0.5 self-end">
                <span className="text-[7px] text-gray-400">10:05 AM</span>
              </div>
            </div>
          </div>

          {/* Incoming Msg (Client) */}
          <div className="flex justify-end">
            <div className="bg-[#d9fdd3] text-black max-w-[80%] rounded-lg px-2.5 py-1.5 shadow-sm rounded-tr-none flex flex-col">
              <p>12:30 pm</p>
              <div className="flex items-center justify-end gap-1 mt-0.5 self-end">
                <span className="text-[7px] text-gray-500/80">10:06 AM</span>
                <span className="text-sky-500 text-[10px] leading-none">✓✓</span>
              </div>
            </div>
          </div>

          {/* Outgoing Msg (Bot) */}
          <div className="flex justify-start">
            <div className="bg-white text-black max-w-[85%] rounded-lg px-2.5 py-1.5 shadow-sm rounded-tl-none space-y-1 flex flex-col">
              <p className="font-semibold text-[#075E54] text-[8px] sm:text-[9.5px]">Run Barber (Bot)</p>
              <p className="font-semibold text-[8px] uppercase tracking-wider text-gray-500">Resumen de tu cita:</p>
              <div className="bg-gray-50 p-1.5 rounded border border-gray-100 space-y-0.5 text-[8.5px] sm:text-[10px]">
                <p>Servicio: <span className="font-semibold">Corte de cabello</span></p>
                <p>Horario: <span className="font-semibold">Sábado 27 - 12:30 PM</span></p>
              </div>
              <p className="text-[7.5px] text-gray-500 font-semibold">¿Confirmar? *Responde: Sí o No.*</p>
              <div className="flex justify-end mt-0.5 self-end">
                <span className="text-[7px] text-gray-400">10:06 AM</span>
              </div>
            </div>
          </div>

          {/* Incoming Msg (Client) */}
          <div className="flex justify-end">
            <div className="bg-[#d9fdd3] text-black max-w-[80%] rounded-lg px-2.5 py-1.5 shadow-sm rounded-tr-none flex flex-col">
              <p>Sí</p>
              <div className="flex items-center justify-end gap-1 mt-0.5 self-end">
                <span className="text-[7px] text-gray-500/80">10:06 AM</span>
                <span className="text-sky-500 text-[10px] leading-none">✓✓</span>
              </div>
            </div>
          </div>

          {/* Outgoing Msg (Bot) */}
          <div className="flex justify-start">
            <div className="bg-white text-black max-w-[85%] rounded-lg px-2.5 py-1.5 shadow-sm rounded-tl-none space-y-1 border-l-4 border-emerald-500 flex flex-col">
              <p className="font-semibold text-[#075E54] text-[8px] sm:text-[9.5px]">Run Barber (Bot)</p>
              <p className="font-semibold text-emerald-600 flex items-center gap-1">📅 ¡Cita confirmada!</p>
              <p>Código: <span className="font-mono font-semibold bg-emerald-50 text-emerald-800 px-1 rounded">BC-400</span></p>
              <div className="flex justify-end mt-0.5 self-end">
                <span className="text-[7px] text-gray-400">10:07 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mock WhatsApp Bottom Bar */}
        <div className="bg-[#f0f0f0] p-1.5 sm:p-2 flex items-center gap-2 border-t border-gray-200/80">
          <div className="flex-1 bg-white rounded-full px-3 py-1 flex items-center justify-between text-[8px] sm:text-[10px] text-gray-400 shadow-sm border border-gray-200/30">
            <span>Escribe un mensaje...</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
          </div>
          <div className="w-6 h-6 sm:w-7.5 sm:h-7.5 rounded-full bg-[#075E54] text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#0b4d45] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
