import React from 'react'
import { LayoutDashboard, CalendarDays, CalendarClock, PanelLeft } from 'lucide-react'

export default function HeroMockup() {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] flex items-center justify-center select-none font-sans">
      {/* ── Background Dashboard Layer (Real System Screenshot Replica) ── */}
      <div className="absolute top-0 left-0 w-[78%] h-[78%] rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-md flex overflow-hidden transition-all duration-300 hover:shadow-lg z-10">
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
          {/* Header (Aligned in height with sidebar toggle container) */}
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

          {/* Agenda Grid (Symmetric mathematical spacing) */}
          <div className="flex-1 flex min-w-0 overflow-y-auto no-scrollbar relative">
            
            {/* Time Axis Column */}
            <div className="w-[38px] grid grid-cols-1 auto-rows-[26px] border-r border-[var(--border)] text-[7px] sm:text-[8px] text-gray-400 font-mono pr-1 py-1">
              {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00'].map((time) => (
                <div key={time} className="h-[26px] flex items-center justify-end pr-1 leading-none">
                  {time}
                </div>
              ))}
            </div>

            {/* Grid Area */}
            <div className="flex-1 grid grid-cols-2 relative">
              
              {/* Column 1: Roberto Mancilla (Left side - white background grid, light blue cards) */}
              <div className="border-r border-[var(--border)] bg-white grid grid-cols-1 auto-rows-[26px] py-1 relative">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border-b border-gray-100 h-[26px]"></div>
                ))}

                {/* Layered Booking Cards absolute positioned over the columns grid */}
                
                {/* Appointment 1: 09:00 - 10:00 */}
                <div 
                  className="absolute left-1 right-1 bg-[#E0F2FE] border border-[#BAE6FD] rounded p-1 flex flex-col justify-between shadow-sm z-10"
                  style={{ top: '6px', height: '48px' }}
                >
                  <div className="leading-tight">
                    <h5 className="font-bold text-[#0369A1] text-[7px] sm:text-[8px] truncate leading-none">Corte de Pelo</h5>
                    <span className="text-[6px] text-gray-500 truncate block mt-0.5 font-medium">Roberto Mancilla • 09:00 - 10:00</span>
                  </div>
                  <span className="self-end px-1 py-0.2 rounded bg-white text-emerald-600 font-bold border border-emerald-100 text-[5px] sm:text-[6px] leading-none">
                    Confirmada
                  </span>
                </div>

                {/* Appointment 2: 11:00 - 12:30 (Andres Uribe removed to leave exactly 3 cards total) */}
                <div 
                  className="absolute left-1 right-1 bg-[#E0F2FE] border border-[#BAE6FD] rounded p-1 flex flex-col justify-between shadow-sm z-10"
                  style={{ top: '110px', height: '74px' }}
                >
                  <div className="leading-tight">
                    <h5 className="font-bold text-[#0369A1] text-[7px] sm:text-[8px] truncate leading-none">Afeitado de barba + Corte</h5>
                    <span className="text-[6px] text-gray-500 truncate block mt-0.5 font-medium">Diego Garcia • 11:00 - 12:30</span>
                  </div>
                  <span className="self-end px-1 py-0.2 rounded bg-white text-emerald-600 font-bold border border-emerald-100 text-[5px] sm:text-[6px] leading-none">
                    Confirmada
                  </span>
                </div>

                {/* Appointment 3: 12:30 - 13:30 (Carlos Brambila - Newly WA booked, styled clean like other cards) */}
                <div 
                  className="absolute left-1 right-1 bg-[#E0F2FE] border border-[#BAE6FD] rounded p-1 flex flex-col justify-between shadow-sm z-10"
                  style={{ top: '188px', height: '48px' }}
                >
                  <div className="leading-tight">
                    <h5 className="font-bold text-[#0369A1] text-[7px] sm:text-[8px] truncate leading-none">Corte de Pelo</h5>
                    <span className="text-[6px] text-gray-500 truncate block mt-0.5 font-medium">Carlos Brambila • 12:30 - 13:30</span>
                  </div>
                  <span className="self-end px-1 py-0.2 rounded bg-white text-emerald-600 font-bold border border-emerald-100 text-[5px] sm:text-[6px] leading-none tracking-wide">
                    Confirmada
                  </span>
                </div>

              </div>

              {/* Column 2: Diego García (Right side - white background grid, empty) */}
              <div className="bg-white grid grid-cols-1 auto-rows-[26px] py-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border-b border-gray-100 h-[26px]"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Foreground WhatsApp Chat Layer (Explicit z-20) ── */}
      <div className="absolute bottom-0 right-0 w-[63%] h-[90%] rounded-2xl border border-[var(--border)] bg-[#ECE5DD] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 z-20">
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white p-3 flex items-center gap-2.5 shadow-sm">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs sm:text-sm">
            B
          </div>
          <div>
            <h4 className="text-[10px] sm:text-xs font-semibold leading-none">Run Barber (Bot)</h4>
            <span className="text-[8px] sm:text-[9px] text-white/70 leading-none">en línea</span>
          </div>
        </div>

        {/* WhatsApp Chat Area (No scrollbars) */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2 text-[9px] sm:text-[11px] leading-tight no-scrollbar">
          {/* Incoming Msg (Client) */}
          <div className="flex justify-end">
            <div className="bg-[#DCF8C6] text-black max-w-[80%] rounded-lg p-2 shadow-sm rounded-tr-none">
              <p>Hola, quiero agendar mañana</p>
            </div>
          </div>

          {/* Outgoing Msg (Bot) */}
          <div className="flex justify-start">
            <div className="bg-white text-black max-w-[85%] rounded-lg p-2 shadow-sm rounded-tl-none space-y-1">
              <p className="font-medium">¡Hola! Bienvenido a Run Barber.</p>
              <p>Estos son los servicios disponibles:</p>
              <p className="font-mono text-[8px] sm:text-[10px]">1. Corte de cabello<br />2. Afeitado de barba</p>
              <p className="text-[8px] text-gray-500 font-semibold">*Responde con el número o nombre del servicio.*</p>
            </div>
          </div>

          {/* Incoming Msg (Client) */}
          <div className="flex justify-end">
            <div className="bg-[#DCF8C6] text-black max-w-[80%] rounded-lg p-2 shadow-sm rounded-tr-none">
              <p>Corte de cabello</p>
            </div>
          </div>

          {/* Outgoing Msg (Bot) */}
          <div className="flex justify-start">
            <div className="bg-white text-black max-w-[85%] rounded-lg p-2 shadow-sm rounded-tl-none space-y-1">
              <p>Horarios para <span className="font-semibold">Corte de cabello</span> el sábado 27:</p>
              <p className="font-mono text-[8px] sm:text-[10px]">1. 11:30 AM (Diego)<br />2. 12:30 PM (Roberto)</p>
              <p className="text-[8px] text-gray-500 font-semibold">*Responde con el número o escribe la hora.*</p>
            </div>
          </div>

          {/* Incoming Msg (Client) */}
          <div className="flex justify-end">
            <div className="bg-[#DCF8C6] text-black max-w-[80%] rounded-lg p-2 shadow-sm rounded-tr-none">
              <p>12:30 pm</p>
            </div>
          </div>

          {/* Outgoing Msg (Bot) */}
          <div className="flex justify-start">
            <div className="bg-white text-black max-w-[85%] rounded-lg p-2 shadow-sm rounded-tl-none space-y-1">
              <p className="font-medium text-[8px] uppercase tracking-wider text-gray-500">Resumen de tu cita:</p>
              <p>Servicio: <span className="font-semibold">Corte de cabello</span></p>
              <p>Horario: <span className="font-semibold">Sábado 27 - 12:30 PM</span></p>
              <p className="text-[8px] text-gray-500 font-semibold">¿Confirmar? *Responde: Sí o No.*</p>
            </div>
          </div>

          {/* Incoming Msg (Client) */}
          <div className="flex justify-end">
            <div className="bg-[#DCF8C6] text-black max-w-[80%] rounded-lg p-2 shadow-sm rounded-tr-none">
              <p>Sí</p>
            </div>
          </div>

          {/* Outgoing Msg (Bot) */}
          <div className="flex justify-start">
            <div className="bg-white text-black max-w-[85%] rounded-lg p-2 shadow-sm rounded-tl-none space-y-1 border-l-4 border-emerald-500">
              <p className="font-semibold text-emerald-600 flex items-center gap-1">📅 ¡Cita confirmada!</p>
              <p>Código: <span className="font-mono font-semibold">BC-400</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
