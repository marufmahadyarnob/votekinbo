const data = [
  {
    area: 'ঢাকা',
    title: '২০০০ টাকায় ভোট',
    desc: 'ডেমো কনটেন্ট। বাস্তব নয়।',
    trust: '100%'
  },
  {
    area: 'মতিঝিল',
    title: 'Fresh Vote',
    desc: 'First vote of my life (demo)',
    trust: '90%'
  },
  {
    area: 'কাশিমপুর',
    title: 'ভোট বিক্রি করবো',
    desc: 'শুধু UI প্র্যাকটিসের জন্য',
    trust: '100%'
  }
];

const listing = document.getElementById('listing');

data.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <span class="tag">${item.area}</span>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
    <small>বিশ্বাসযোগ্যতা: ${item.trust}</small>
  `;

  listing.appendChild(card);
}); 
