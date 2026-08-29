import { useState } from 'react';
import { CheckIcon, Loader2Icon } from 'lucide-react';
import { enquiryProducts } from '../../data/site';
import { Button } from '../ui/Button';
import { MonoLabel } from '../ui/MonoLabel';
const TEXT_FIELDS = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'company', label: 'Company', type: 'text', required: false },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'quantity', label: 'Quantity', type: 'text', required: false },
];
const inputClass =
  'w-full border-0 border-b border-metal/25 bg-transparent pb-3 pt-2 text-[15px] text-chalk outline-none transition-colors duration-200 placeholder:text-steel/50 focus:border-molten';
function EnquiryForm() {
  const [status, setStatus] = useState('idle');
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!data.get('name') || !data.get('email') || !data.get('phone')) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('success');
      form.reset();
    }, 900);
  };
  return (
    <div id="contact" className="relative border border-metal/15 bg-graphite p-6 sm:p-10">
      <div className="flex items-center justify-between">
        <MonoLabel>/ Quick Enquiry</MonoLabel>
        <MonoLabel tone="steel">SWPL / 2013</MonoLabel>
      </div>
      <h3 className="mt-6 font-display text-[26px] font-medium uppercase leading-tight tracking-tight text-chalk sm:text-[30px]">
        Send your specification
      </h3>
      <form className="mt-10" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {TEXT_FIELDS.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={`enq-${field.name}`}
                className="block font-mono text-[10px] uppercase tracking-[0.2em] text-steel"
              >
                {field.label}
                {field.required && <span className="text-molten"> *</span>}
              </label>
              <input
                id={`enq-${field.name}`}
                name={field.name}
                type={field.type}
                required={field.required}
                autoComplete={field.name === 'name' ? 'name' : field.name}
                className={inputClass}
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="enq-product"
              className="block font-mono text-[10px] uppercase tracking-[0.2em] text-steel"
            >
              Product Requirement
            </label>
            <select
              id="enq-product"
              name="product"
              defaultValue={enquiryProducts[0]}
              className={`${inputClass} appearance-none`}
            >
              {enquiryProducts.map((product) => (
                <option key={product} value={product} className="bg-ink">
                  {product}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="enq-message"
              className="block font-mono text-[10px] uppercase tracking-[0.2em] text-steel"
            >
              Message
            </label>
            <textarea
              id="enq-message"
              name="message"
              rows={3}
              placeholder="Mesh size, wire diameter, coating, delivery location…"
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Button type="submit" variant="primary" arrow="right">
            {status === 'submitting' ? 'Sending' : 'Submit Requirement'}
          </Button>
          <p
            role="status"
            aria-live="polite"
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em]"
          >
            {status === 'submitting' && (
              <span className="flex items-center gap-2 text-steel">
                <Loader2Icon className="h-3.5 w-3.5 animate-spin" />
                Transmitting enquiry
              </span>
            )}
            {status === 'success' && (
              <span className="flex items-center gap-2 text-molten">
                <CheckIcon className="h-3.5 w-3.5" />
                Received — our team will respond within one working day
              </span>
            )}
            {status === 'error' && (
              <span className="text-molten">Name, phone and email are required</span>
            )}
          </p>
        </div>
      </form>
    </div>
  );
}
export { EnquiryForm };
