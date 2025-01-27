const facts = [
    {
        "fact": "The Universe is Expanding",
        "description": "The universe has been expanding since the Big Bang, which occurred approximately 13.8 billion years ago. This expansion is observed through the redshift of distant galaxies."
    },
    {
        "fact": "Black Holes",
        "description": "Black holes are regions in space where the gravitational pull is so strong that nothing, not even light, can escape from them. They are formed when massive stars collapse under their own gravity."
    },
    {
        "fact": "The Milky Way Galaxy",
        "description": "Our galaxy, the Milky Way, is a barred spiral galaxy that contains over 100 billion stars. It is about 100,000 light-years in diameter."
    },
    {
        "fact": "Neutron Stars",
        "description": "Neutron stars are incredibly dense remnants of supernova explosions. A sugar-cube-sized amount of neutron-star material would weigh about as much as all of humanity combined."
    },
    {
        "fact": "The Coldest Place in the Universe",
        "description": "The Boomerang Nebula is considered the coldest known place in the universe, with a temperature of about -272 degrees Celsius (-458 degrees Fahrenheit), just a degree above absolute zero."
    },
    {
        "fact": "Exoplanets",
        "description": "Thousands of exoplanets (planets outside our solar system) have been discovered, with some located in the 'habitable zone' where conditions might be right for liquid water to exist."
    },
    {
        "fact": "The Great Wall of Galaxies",
        "description": "The Sloan Great Wall is one of the largest known structures in the universe, consisting of a vast group of galaxies that spans over 1.37 billion light-years."
    },
    {
        "fact": "The Sun's Size",
        "description": "The Sun accounts for about 99.86% of the total mass of our solar system. It is so large that approximately 1.3 million Earths could fit inside it."
    },
    {
        "fact": "Time Dilation",
        "description": "According to Einstein's theory of relativity, time moves slower in stronger gravitational fields. This means that time passes differently on Earth compared to a satellite in orbit."
    },
    {
        "fact": "The Observable Universe",
        "description": "The observable universe is about 93 billion light-years in diameter, containing an estimated 2 trillion galaxies, each with millions or billions of stars."
    }
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];
    document.getElementById('fact').innerText = fact.fact + ": " + fact.description;
}

// Show a random fact when the page loads
window.onload = getRandomFact;

// Show a new random fact when the button is clicked
document.getElementById('newFactButton').addEventListener('click', getRandomFact);
