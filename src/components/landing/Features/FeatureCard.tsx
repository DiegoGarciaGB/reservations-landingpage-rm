import React from 'react'
import {
  MessageCircle,
  LayoutDashboard,
  CalendarCheck,
  Bell,
  Users,
  Receipt,
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  MessageCircle: <MessageCircle size={22} />,
  LayoutDashboard: <LayoutDashboard size={22} />,
  CalendarCheck: <CalendarCheck size={22} />,
  Bell: <Bell size={22} />,
  Users: <Users size={22} />,
  Receipt: <Receipt size={22} />,
}

type FeatureCardProps = {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="surface flex h-full flex-col p-7">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]">
        {iconMap[icon] ?? null}
      </div>
      <h3 className="subheading">{title}</h3>
      <p className="mt-2 flex-1 leading-7 text-[var(--muted)]">{description}</p>
    </article>
  )
}
