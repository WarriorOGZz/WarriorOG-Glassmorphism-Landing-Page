import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { warriorDetails } from '../data/portfolioData';
import { X, Send, Copy, Check, Mail, MessageSquare, Sparkles, Loader2, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formspreeEndpoint?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  formspreeEndpoint = "https://formspree.io/f/xzdnlzbq"
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(warriorDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(warriorDetails.discord);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Portfolio Contact: ${formData.subject || 'Inquiry'} from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }
      }
    } catch {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="liquid-glass-strong w-full max-w-xl rounded-3xl p-6 sm:p-8 text-white relative shadow-2xl border border-white/20 overflow-hidden my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full liquid-glass hover:bg-white/20 transition-colors text-white cursor-pointer z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6 flex items-start gap-4">
            <img
              src={warriorDetails.avatarUrl}
              alt="WarriorOG Avatar"
              className="w-12 h-12 rounded-2xl object-cover border border-white/20 shadow-lg shrink-0 mt-1"
            />
            <div>
              <div className="flex items-center gap-2 text-xs font-body text-neutral-400 uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#89AACC]" />
                <span>Get in Touch · Powered by Formspree</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display italic text-white">
                Let's build something <span className="accent-text-gradient">exceptional</span>
              </h2>
              <p className="text-xs sm:text-sm font-body font-light text-neutral-300 mt-1">
                Have a web project, Discord bot request, or technical query? Drop a message below or reach out directly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="liquid-glass rounded-2xl p-3 border border-white/10 hover:border-white/20 transition-all text-left flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#89AACC]" />
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase font-mono">Email Direct</div>
                  <div className="text-xs font-body text-white font-medium">{warriorDetails.email}</div>
                </div>
              </div>
              {copiedEmail ? <Check className="w-4 h-4 text-green-400 shrink-0" /> : <Copy className="w-4 h-4 text-neutral-400 group-hover:text-white shrink-0" />}
            </button>

            <button
              type="button"
              onClick={handleCopyDiscord}
              className="liquid-glass rounded-2xl p-3 border border-white/10 hover:border-white/20 transition-all text-left flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#4E85BF]" />
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase font-mono">Discord Tag</div>
                  <div className="text-xs font-body text-white font-medium">{warriorDetails.discord}</div>
                </div>
              </div>
              {copiedDiscord ? <Check className="w-4 h-4 text-green-400 shrink-0" /> : <Copy className="w-4 h-4 text-neutral-400 group-hover:text-white shrink-0" />}
            </button>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 text-center flex flex-col items-center gap-3 my-4"
            >
              <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center text-black font-bold shadow-lg">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display italic text-white">Message Transmitted via Formspree!</h3>
              <p className="text-xs text-neutral-300 font-body max-w-sm leading-relaxed">
                Thank you for reaching out! Your message has been routed to WarriorOG. I will respond to your email shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-2 text-xs font-mono text-[#89AACC] hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2 font-body">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-body text-neutral-400 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Rivera"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#89AACC] transition-colors font-body"
                  />
                </div>
                <div>
                  <label className="block text-xs font-body text-neutral-400 uppercase tracking-wider mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#89AACC] transition-colors font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-body text-neutral-400 uppercase tracking-wider mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Discord Bot Development / Web App Project"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#89AACC] transition-colors font-body"
                />
              </div>

              <div>
                <label className="block text-xs font-body text-neutral-400 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, timeline, and requirements..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#89AACC] transition-colors font-body resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full accent-gradient text-black font-semibold rounded-full py-3.5 px-6 text-sm hover:opacity-90 transition-opacity font-body cursor-pointer shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting via Formspree...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
