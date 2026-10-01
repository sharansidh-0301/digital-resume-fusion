import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import resume from '@/assets/Sharansidh_JR_SoftwareDeveloper.pdf';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const submit = (event: React.FormEvent) => { event.preventDefault(); const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`; window.location.href = `mailto:sharansidh0301@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`; };
  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden bg-gradient-hero pt-24 pb-20 noise">
      <div className="absolute inset-0 bg-grid-pattern opacity-45" aria-hidden />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[.7fr_1.3fr]"><div className="font-mono text-xs uppercase text-primary">Secure channel / open</div><div><h1 className="text-4xl sm:text-5xl lg:text-6xl">Start a conversation.</h1><p className="mt-4 max-w-2xl text-muted-foreground">Open to entry-level cybersecurity roles, SOC opportunities, internships, and practical security collaborations.</p></div></div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <aside className="space-y-3">
            {[{icon: Mail, label: 'Email', value: 'sharansidh0301@gmail.com', href: 'mailto:sharansidh0301@gmail.com'}, {icon: Phone, label: 'Phone', value: '+91 9003721737', href: 'tel:+919003721737'}, {icon: MapPin, label: 'Location', value: 'Villupuram, Tamil Nadu, India', href: undefined}].map(({icon: Icon, label, value, href}) => {
              const content = <><Icon className="h-5 w-5 text-primary" /><div><div className="font-mono text-[9px] uppercase text-primary">{label}</div><div className="mt-1 break-all text-sm text-muted-foreground">{value}</div></div></>;
              return href ? <a key={label} href={href} className="flex items-center gap-4 border border-border bg-card/50 p-4 hover:border-primary/60">{content}</a> : <div key={label} className="flex items-center gap-4 border border-border bg-card/50 p-4">{content}</div>;
            })}
            <div className="flex gap-3 pt-3"><Button variant="outline" size="icon" asChild className="rounded-none"><a href="https://github.com/sharansidh-0301" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></Button><Button variant="outline" size="icon" asChild className="rounded-none"><a href="https://www.linkedin.com/in/sharansidh-jr/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button><Button variant="outline" asChild className="rounded-none"><a href={resume} target="_blank" rel="noreferrer"><Download />Résumé</a></Button></div>
            <div className="mt-6 border-l-2 border-primary bg-primary/5 p-5"><div className="flex items-center gap-2 font-mono text-[10px] uppercase text-primary"><Radio className="h-4 w-4" />Channel status</div><p className="mt-3 text-sm text-muted-foreground">Messages open in your email app, so you remain in control of sending.</p></div>
          </aside>
          <form onSubmit={submit} className="hud-corners border border-border bg-card/55 p-6 sm:p-8">
            <div className="font-mono text-[10px] uppercase text-primary">Compose transmission</div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2"><label className="text-sm">Name<Input name="name" value={form.name} onChange={update} required className="mt-2 rounded-none" /></label><label className="text-sm">Email<Input name="email" type="email" value={form.email} onChange={update} required className="mt-2 rounded-none" /></label></div>
            <label className="mt-5 block text-sm">Subject<Input name="subject" value={form.subject} onChange={update} required className="mt-2 rounded-none" /></label>
            <label className="mt-5 block text-sm">Message<Textarea name="message" value={form.message} onChange={update} required rows={7} className="mt-2 rounded-none" /></label>
            <Button type="submit" size="lg" className="mt-6 w-full rounded-none uppercase tracking-wider"><Send />Open in email</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
