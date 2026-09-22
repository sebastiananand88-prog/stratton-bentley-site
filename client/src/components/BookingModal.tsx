import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Calendar, Clock, MapPin, Loader2 } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SERVICES = [
  "Comprehensive Eye Examination",
  "3D OCT Eye Scan",
  "Visual Stress Assessment (ChromaGen)",
  "Dry Eye Assessment & Treatment",
  "Myopia Management Consultation",
  "Emergency Eye Appointment",
  "Bespoke Eyewear Styling Consultation",
  "Contact Lens Fitting",
  "Children's Eye Test",
  "Other / Not Sure",
];

const TIME_SLOTS = [
  "Morning (9am – 12pm)",
  "Afternoon (12pm – 3pm)",
  "Late Afternoon (3pm – 6pm)",
  "Flexible / Any Time",
];

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
    location: "either" as "billericay" | "leigh-on-sea" | "either",
  });

  const submitMutation = trpc.booking.submit.useMutation({
    onSuccess: (data) => {
      setSubmitted(true);
      toast.success("Booking request sent!", {
        description: data.message,
        duration: 6000,
      });
    },
    onError: (error) => {
      toast.error("Something went wrong", {
        description: error.message || "Please try again or call us directly.",
        duration: 6000,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    submitMutation.mutate(form);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after close animation
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        notes: "",
        location: "either",
      });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        {submitted ? (
          // Success State
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-secondary" />
            </div>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-primary text-center">
                Booking Request Sent!
              </DialogTitle>
              <DialogDescription className="text-center text-sm leading-relaxed">
                Thank you, <strong>{form.name}</strong>. We have received your request for a{" "}
                <strong>{form.service}</strong> appointment and will confirm your slot within 2 hours.
              </DialogDescription>
            </DialogHeader>
            <div className="bg-primary/5 rounded-xl p-4 text-xs text-muted-foreground text-left space-y-2 border border-primary/10">
              <p className="font-semibold text-primary text-sm">What happens next?</p>
              <p>Our team will review your request and contact you at <strong>{form.email}</strong>{form.phone ? ` or ${form.phone}` : ""} to confirm your appointment time.</p>
              <p>If you need urgent assistance, please call us directly.</p>
            </div>
            <Button onClick={handleClose} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Close
            </Button>
          </div>
        ) : (
          // Form State
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-xl text-primary">
                Book an Appointment
              </DialogTitle>
              <DialogDescription className="text-sm">
                Request an appointment at Stratton Opticians (Billericay) or Bentley Opticians (Leigh-on-Sea). We will confirm your slot within 2 hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              {/* Location */}
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-secondary" /> Location
                </Label>
                <Select
                  value={form.location}
                  onValueChange={(v) => setForm((f) => ({ ...f, location: v as typeof form.location }))}
                >
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="billericay">Stratton Opticians — Billericay</SelectItem>
                    <SelectItem value="leigh-on-sea">Bentley Opticians — Leigh-on-Sea</SelectItem>
                    <SelectItem value="either">Either Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Service */}
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Service Required <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={form.service}
                  onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}
                >
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="text-sm"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="07700 900000"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="text-sm"
                  required
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="date" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-secondary" /> Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={form.preferredDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setForm((f) => ({ ...f, preferredDate: e.target.value }))}
                    className="text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-secondary" /> Preferred Time
                  </Label>
                  <Select
                    value={form.preferredTime}
                    onValueChange={(v) => setForm((f) => ({ ...f, preferredTime: v }))}
                  >
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Any time" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <Label htmlFor="notes" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any symptoms, concerns, or special requirements..."
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  className="text-sm resize-none"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold tracking-wide"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  "Request Appointment"
                )}
              </Button>

              <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                By submitting this form you agree to be contacted by Stratton & Bentley Opticians regarding your appointment. We will never share your details with third parties.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
