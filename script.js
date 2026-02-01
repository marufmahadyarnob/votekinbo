const data = [
  {
    area: 'জামায়াতে ইসলামী',
    title: '২০০০ টাকা প্রতি ভোট',
    desc: 'নগদ ক্যাশ বা বিকাশ',
    trust: '100%'
  },
  {
    area: 'বিএনপি',
    title: '৩০০০ টাকা প্রতি ভোট',
    desc: 'নগদ ক্যাশ বা বিকাশ',
    trust: '99.99%'
  },
  {
    area: 'আমজনতা দল',
    title: '৫০০০ টাকা প্রতি ভোট',
    desc: 'বিকাশ অনলি',
    trust: '-100%'
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
