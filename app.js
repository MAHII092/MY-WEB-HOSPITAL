/**
 * MS BUILDS - Hospital Website Builder
 * Core Application Logic
 * Multi-client | Appointments | Google Sheets
 */

// ============================================================
// DEFAULT CLIENT DATA TEMPLATE
// ============================================================
const DEFAULT_CLIENT = {
  slug: "default",
  settings: {
    hospitalName: "आरोग्य मंदिर रुग्णालय",
    tagline: "आरोग्य सेवा केंद्र",
    description: "तुमच्या आरोग्याची काळजी घेण्यासाठी आम्ही सदैव सज्ज आहोत. अत्याधुनिक सुविधा आणि अनुभवी डॉक्टरांसह सर्वोत्तम वैद्यकीय सेवा.",
    address: "१२३, मुख्य रस्ता, पुणे - ४११ ००१, महाराष्ट्र",
    phone: "०२०-२७३४५६७८",
    emergencyNumber: "१०८",
    email: "info@aarogyamandir.in",
    timings: "सोमवार - शनिवार: सकाळी ९:०० ते रात्री ९:०० | रविवार: सकाळी ९:०० ते दुपारी २:००",
    googleSheetWebhook: "",
    colors: {
      accentCyan: "#00D4FF",
      accentBlue: "#3B82F6",
      accentPurple: "#A855F7",
      bgPrimary: "#020B18"
    }
  },
  stats: [
    { num: "१५,०००+", label: "समाधानी रुग्ण" },
    { num: "२५+", label: "अनुभवी डॉक्टर" },
    { num: "१५+", label: "वर्षांचा अनुभव" },
    { num: "२४/७", label: "आपत्कालीन सेवा" }
  ],
  services: [
    { icon: "❤️", title: "हृदयरोग उपचार", desc: "आधुनिक ECG, इकोकार्डियोग्राफी व हृदय शस्त्रक्रियेची सुविधा" },
    { icon: "🦷", title: "दंत चिकित्सा", desc: "दात स्वच्छता, रूट कॅनल, इम्प्लांट व कॉस्मेटिक दंतचिकित्सा" },
    { icon: "👁️", title: "नेत्र चिकित्सा", desc: "LASIK, मोतीबिंदू शस्त्रक्रिया व नेत्र तपासणी" },
    { icon: "🦴", title: "हाडे व सांधे", desc: "फ्रॅक्चर, संधिवात, गुडघा बदल शस्त्रक्रिया" },
    { icon: "🧠", title: "मेंदू व मज्जासंस्था", desc: "न्यूरोलॉजी, मेंदूचे आजार, मणक्याचे उपचार" },
    { icon: "👶", title: "बालरोग", desc: "लहान मुलांची संपूर्ण आरोग्य सेवा व लसीकरण" },
    { icon: "🤰", title: "स्त्रीरोग व प्रसूती", desc: "गर्भधारणा देखभाल, प्रसूती व स्त्री आरोग्य सेवा" },
    { icon: "🔬", title: "प्रयोगशाळा सेवा", desc: "रक्त तपासणी, एक्स-रे, MRI, CT स्कॅन, सोनोग्राफी" }
  ],
  departments: [
    { icon: "❤️", name: "हृदयरोग विभाग" },
    { icon: "🧠", name: "न्यूरोलॉजी" },
    { icon: "🦴", name: "अस्थिरोग" },
    { icon: "👶", name: "बालरोग" },
    { icon: "🤰", name: "स्त्रीरोग" },
    { icon: "🦷", name: "दंतचिकित्सा" },
    { icon: "👁️", name: "नेत्ररोग" },
    { icon: "🫁", name: "फुफ्फुस विभाग" },
    { icon: "🏃", name: "फिजिओथेरपी" },
    { icon: "🔬", name: "पॅथॉलॉजी" },
    { icon: "💊", name: "औषधशास्त्र" },
    { icon: "🚑", name: "आपत्कालीन" }
  ],
  facilities: [
    { icon: "🏥", title: "२४/७ आपत्कालीन", desc: "दिवसरात्र आपत्कालीन सेवा उपलब्ध" },
    { icon: "🔬", title: "आधुनिक प्रयोगशाळा", desc: "MRI, CT स्कॅन, सोनोग्राफी सुविधा" },
    { icon: "🚑", title: "रुग्णवाहिका सेवा", desc: "GPS सुसज्ज रुग्णवाहिका सेवा" },
    { icon: "💊", title: "फार्मसी", desc: "रुग्णालयातच औषधे उपलब्ध" },
    { icon: "🍽️", title: "रुग्णाहार सेवा", desc: "आहारतज्ज्ञांनी तयार केलेला आहार" },
    { icon: "🅿️", title: "पार्किंग सुविधा", desc: "विस्तृत व सुरक्षित पार्किंग" },
    { icon: "📡", title: "टेलिमेडिसिन", desc: "व्हिडिओ कॉलद्वारे डॉक्टरांशी सल्लामसलत" },
    { icon: "🛏️", title: "आरामदायी कक्ष", desc: "AC कक्ष, Wi-Fi, TV सुविधांसह" }
  ],
  doctors: [
    { emoji: "👨‍⚕️", name: "डॉ. राजेश पाटील", dept: "हृदयरोग विभाग", exp: "२० वर्षांचा अनुभव" },
    { emoji: "👩‍⚕️", name: "डॉ. सुनीता देशमुख", dept: "स्त्रीरोग", exp: "१५ वर्षांचा अनुभव" },
    { emoji: "👨‍⚕️", name: "डॉ. अमित जोशी", dept: "न्यूरोलॉजी", exp: "१८ वर्षांचा अनुभव" },
    { emoji: "👩‍⚕️", name: "डॉ. प्रिया शर्मा", dept: "बालरोग", exp: "१२ वर्षांचा अनुभव" }
  ]
};

// ============================================================
// STORAGE HELPERS
// ============================================================
function getAllClients() {
  try {
    const data = localStorage.getItem('msbBuilderClients');
    return data ? JSON.parse(data) : {};
  } catch (e) { return {}; }
}

function saveAllClients(clients) {
  localStorage.setItem('msbBuilderClients', JSON.stringify(clients));
}

function getClient(slug) {
  const clients = getAllClients();
  if (clients[slug]) return clients[slug];
  if (slug === 'default') return DEFAULT_CLIENT;
  return null;
}

function saveClient(slug, data) {
  const clients = getAllClients();
  clients[slug] = data;
  saveAllClients(clients);
}

function saveAppointment(apptData) {
  const slug = apptData.client || 'default';
  const key = `msbAppts_${slug}`;
  let appts = [];
  try {
    const existing = localStorage.getItem(key);
    if (existing) appts = JSON.parse(existing);
  } catch (e) {}
  apptData.id = Date.now();
  appts.unshift(apptData);
  localStorage.setItem(key, JSON.stringify(appts));
  return apptData;
}

function getAppointments(slug) {
  const key = `msbAppts_${slug || 'default'}`;
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (e) { return []; }
}

// ============================================================
// GOOGLE SHEET INTEGRATION
// ============================================================
function sendToGoogleSheet(apptData) {
  const slug = apptData.client || 'default';
  const client = getClient(slug);
  const webhookUrl = client?.settings?.googleSheetWebhook;

  if (!webhookUrl) return;

  fetch(webhookUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(apptData)
  }).then(() => {
    console.log('Google Sheet ला पाठवले ✓');
  }).catch(err => {
    console.error('Google Sheet error:', err);
  });
}

// ============================================================
// RENDER CLIENT WEBSITE
// ============================================================
function renderClientSite(slug) {
  const client = getClient(slug);
  if (!client) {
    document.body.innerHTML = `
      <div class="not-found" style="z-index:1;position:relative;">
        <h1>🏥 रुग्णालय सापडले नाही</h1>
        <p>हा slug "${slug}" अस्तित्वात नाही.</p>
        <a href="admin.html" class="btn-primary" style="display:inline-block;margin-top:16px;">Admin Panel</a>
      </div>`;
    return;
  }

  window.currentClientSlug = slug;
  window.currentClient = client;
  const s = client.settings;

  // Apply custom colors
  if (s.colors) {
    const root = document.documentElement;
    if (s.colors.accentCyan) root.style.setProperty('--accent-cyan', s.colors.accentCyan);
    if (s.colors.accentBlue) root.style.setProperty('--accent-blue', s.colors.accentBlue);
    if (s.colors.accentPurple) root.style.setProperty('--accent-purple', s.colors.accentPurple);
    if (s.colors.bgPrimary) root.style.setProperty('--bg-primary', s.colors.bgPrimary);
    root.style.setProperty('--gradient-hero',
      `linear-gradient(135deg, ${s.colors.accentCyan || '#00D4FF'} 0%, ${s.colors.accentBlue || '#3B82F6'} 50%, ${s.colors.accentPurple || '#A855F7'} 100%)`
    );
  }

  // Page title & meta
  document.getElementById('page-title').textContent = s.hospitalName;

  // Header
  safeSet('header-hospital-name', s.hospitalName);
  safeSet('header-tagline', s.tagline);

  // Hero
  const stats = client.stats || DEFAULT_CLIENT.stats;
  for (let i = 0; i < 4; i++) {
    if (stats[i]) {
      safeSet(`stat${i+1}-num`, stats[i].num);
      safeSet(`stat${i+1}-label`, stats[i].label);
    }
  }

  // Contact
  safeSet('contact-address', s.address);
  safeSet('contact-phone', s.phone);
  safeSet('contact-email', s.email);
  safeSet('contact-timings', s.timings);
  safeSet('contact-emergency', s.emergencyNumber);
  safeSet('hospital-map-name', s.hospitalName);
  const mapEl = document.getElementById('map-link');
  if (mapEl) mapEl.href = `https://maps.google.com/?q=${encodeURIComponent(s.hospitalName + ' ' + s.address)}`;

  // Footer
  safeSet('footer-name', s.hospitalName);
  safeSet('footer-desc', s.description);
  safeSet('footer-copy-name', s.hospitalName);
  const fPhone = document.getElementById('footer-phone-link');
  if (fPhone) { fPhone.textContent = s.phone; fPhone.href = `tel:${s.phone}`; }
  const fEmail = document.getElementById('footer-email-link');
  if (fEmail) { fEmail.textContent = s.email; fEmail.href = `mailto:${s.email}`; }

  // Render sections
  renderServices(client.services || DEFAULT_CLIENT.services);
  renderDepartments(client.departments || DEFAULT_CLIENT.departments);
  renderFacilities(client.facilities || DEFAULT_CLIENT.facilities);
  renderDoctors(client.doctors || DEFAULT_CLIENT.doctors);
  populateFormDepts(client.departments || DEFAULT_CLIENT.departments, client.doctors || DEFAULT_CLIENT.doctors);
}

function safeSet(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined) el.textContent = value;
}

function renderServices(services) {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = services.map(s => `
    <div class="glass-card service-card animate-in">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');
  reObserve(grid);
}

function renderDepartments(depts) {
  const grid = document.getElementById('dept-grid');
  if (!grid) return;
  grid.innerHTML = depts.map(d => `
    <div class="glass-card dept-card animate-in">
      <div class="dept-icon">${d.icon}</div>
      <h4>${d.name}</h4>
    </div>
  `).join('');
  reObserve(grid);
}

function renderFacilities(facilities) {
  const grid = document.getElementById('facilities-grid');
  if (!grid) return;
  grid.innerHTML = facilities.map(f => `
    <div class="glass-card facility-card animate-in">
      <div class="facility-icon">${f.icon}</div>
      <div class="facility-text">
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>
    </div>
  `).join('');
  reObserve(grid);
}

function renderDoctors(doctors) {
  const grid = document.getElementById('doctors-grid');
  if (!grid) return;
  grid.innerHTML = doctors.map(d => `
    <div class="glass-card doctor-card animate-in">
      <div class="doctor-avatar">${d.emoji}</div>
      <h3>${d.name}</h3>
      <div class="doctor-dept">${d.dept}</div>
      <div class="doctor-exp">${d.exp}</div>
      <span class="doctor-badge">✓ तज्ज्ञ डॉक्टर</span>
    </div>
  `).join('');
  reObserve(grid);
}

function populateFormDepts(depts, doctors) {
  const deptSelect = document.getElementById('f-dept');
  if (!deptSelect) return;
  deptSelect.innerHTML = '<option value="">विभाग निवडा</option>' +
    depts.map(d => `<option value="${d.name}">${d.icon} ${d.name}</option>`).join('');

  window._allDoctors = doctors;
  window.updateDoctorSelect = function() {
    const selected = deptSelect.value;
    const docSelect = document.getElementById('f-doctor');
    if (!docSelect) return;
    const filtered = (window._allDoctors || []).filter(d => !selected || d.dept === selected);
    if (filtered.length > 0) {
      docSelect.innerHTML = '<option value="">डॉक्टर निवडा</option>' +
        filtered.map(d => `<option value="${d.name}">${d.name}</option>`).join('');
    } else {
      docSelect.innerHTML = '<option value="">डॉक्टर निवडा</option>' +
        (window._allDoctors || []).map(d => `<option value="${d.name}">${d.name}</option>`).join('');
    }
  };
  window.updateDoctorSelect();
}

function reObserve(parent) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  parent.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
}

// ============================================================
// ROUTER - detect slug from URL
// ============================================================
function initRouter() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('hospital') || params.get('slug') || 'default';

  // Initialize default client if doesn't exist
  const clients = getAllClients();
  if (!clients['default']) {
    clients['default'] = JSON.parse(JSON.stringify(DEFAULT_CLIENT));
    saveAllClients(clients);
  }

  renderClientSite(slug);
}

// ============================================================
// AUTO-INIT on index.html
// ============================================================
if (document.getElementById('main-header')) {
  document.addEventListener('DOMContentLoaded', initRouter);
}
