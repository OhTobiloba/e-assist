function wireForm(formId, successId){
    const form = document.getElementById(formId);
    const success = document.getElementById(successId);
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = form.querySelector('input[type=email]').value;
      if (!email) return;
      form.style.display = 'none';
      success.style.display = 'block';
      // Demo only: no backend wired up. In production, POST { email, role } to
      // your waitlist endpoint or an email service (Mailchimp, ConvertKit, etc).
    });
  }
  wireForm('hero-form', 'hero-success');
  wireForm('cta-form', 'cta-success');
