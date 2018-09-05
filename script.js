const heroData = [
  {
    name: "Batman",
    realName: "Bruce Wayne",
    skillsAndAbilities: ["Genius-level intellect", "Master detective", "gadgets"],
    baseOfOperations: "Gotham City",
    creators: "Bob Kane, Bill Finger",
    firstAppearance: "May, 1939",
    image: "images/hero-batman.jpg"
  },

  {
    name: "Aquaman",
    realName: "Arthur Curry",
    skillsAndAbilities: ["Hand-to-hand combat", "Spear fighting expertise"],
    superpowers: ["Marine telepathy", "superhuman strength", "enhanced swimming speed"],
    baseOfOperations: "Atlantis",
    creators: "Mort Weisinger, Paul Norris",
    firstAppearance: "November, 1941",
    image: "images/hero-aquaman.jpg"
  },

  {
    name: "Iron Man",
    realName: "Tony Stark",
    skillsAndAbilities: ["Powerful metal armour", "Genius-level intelligence", "Tech gadgets"],
    baseOfOperations: "New York",
    creators: "Stan Lee",
    firstAppearance: "May, 1968",
    image: "images/hero-ironman.jpg"
  },

  {
    name: "Hulk",
    realName: "Bruce Banner",
    skillsAndAbilities: ["Genius-level intellect", "Natural fighting talent"],
    superpowers: ["Superhuman strength", "Superhuman durability"],
    baseOfOperations: "Mobile",
    creators: "Stan Lee, Jack Kirby",
    firstAppearance: "May, 1962",
    image: "images/hero-hulk.jpg"
  },

  {
    name: "Thor",
    realName: "Thor Odinson",
    skillsAndAbilities: ["Leadership skills", "Expert in armed and unarmed combat"],
    superpowers: ["Super strength", "Dimensional transportation", "Weather manipulation"],
    baseOfOperations: "Asgard",
    creators: "Stan Lee, Larry Lieber, Jack Kirby",
    firstAppearance: "August, 1962",
    image: "images/hero-thor.jpg"
  }
];

function heroSection(hero) {
  return `
    <div class="hero-box">
      <img src="${hero.image}">    
      <h2>${hero.name} <span class="hero-real-name">(${hero.realName})</span></h2>
      <p><strong>Created by:</strong> ${hero.creators}</p>
      <p><strong>First appearance:</strong> ${hero.firstAppearance}</p>
      <p><strong>Base of operations:</strong> ${hero.baseOfOperations}</p>
      ${hero.superpowers ? superpowers(hero.superpowers) : ""}
      ${skillsAndAbilities(hero.skillsAndAbilities)}
    </div>
  `
}

function superpowers(superpower){
  return `
  <h3>Superpowers</h3>
  <ul>
    ${superpower.map(function(superpower){return `<li>${superpower}</li>`}).join("")}
  </ul>
  `
}

function skillsAndAbilities(skillOrAbility){
  return `
  <h3>Skills and Abilities</h3>
  <ul>
    ${skillOrAbility.map(function(skillOrAbility){return `<li>${skillOrAbility}</li>`}).join("")}
  </ul>
  `
}

document.getElementById('main').innerHTML = `
  <h1>Superheroes</h1>
  ${heroData.map(heroSection).join("")}
`