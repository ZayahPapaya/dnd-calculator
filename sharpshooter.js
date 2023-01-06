const stat = 5; // +5 Intelligence
const prof = 3; // 5th level is +3 prof
const toHitMods = 3; // +2 from Archery, +1 from magic weapon
const damageMods = 1; // +1 from magic weapon
const weaponDamage = 5.5; // 1d10 average is 5.5

const toHit = stat + prof + toHitMods; // 11
const totalDamage = (weaponDamage + stat + damageMods) // 11.5
const maxAC = toHit - ((totalDamage) / 2) + 16
console.log('Max AC = ', maxAC);
//console.log(11.5*(1-0.05*(21.25-11-1)) === (11.5+10)*(1-0.05*(21.25-(11-5)-1)))
const seph = {
  name: 'Seph',
  sharpshooter: true,
  attacks: 2,
  stat: 4,
  prof: 3,
  toHitMods: 0,
  damageMods: 0,
  weaponDamage: 5.5,
  toHit: this.stat + this.prof + this.toHitMods,
  totalDamage: this.weaponDamage + this.stat + this.damageMods,
}

const armorTest = (character) => {
  const { name, sharpshooter, attacks, toHit, totalDamage } = character;

  for (let i = 0; i <= 30; i++) {
    const dpr = totalDamage * (1 - 0.05 * (i - toHit - 1));
    let dprSS = undefined;
    let ssMessage = '';
    if(sharpshooter) {
      dprSS = (totalDamage + 10) * (1 - 0.05 * (i - (toHit - 5) - 1));
      ssMessage = `Sharpshooter: ${Math.round(dprSS)}`
    };
    console.log(
      `
      AC: ${i}
      DPR: ${Math.round(dpr)}
      `);
    if(sharpshooter) {
    console.log(`Sharpshooter better? ${dpr < dprSS ? 'Yes' : 'No'}`);
    }
  }
}  
const ArmorTest = () => {
  for (let i = 0; i <= 30; i++) {
    normalDPR = totalDamage * (1 - 0.05 * (i - toHit - 1));
    ssDPR = (totalDamage + 10) * (1 - 0.05 * (i - (toHit - 5) - 1))
    console.log(`AC: ${i}, Normal: ${Math.round(normalDPR)}, Sharpshooter: ${Math.round(ssDPR)}.`);
    console.log(`Sharpshooter better? ${normalDPR < ssDPR ? 'Yes' : 'No'}`);
    console.log(`
    Barbarian: ${Math.round((6.5 + stat + 2) * (1 - 0.05 * (i - (stat + prof) - 1)))*2},
    GWM-Barbarian: ${Math.round((6.5 + stat + 12) * (1 - 0.05 * (i - (stat + prof - 5) - 1)))*2},
    Bugslinger: ${Math.round(((2.5*2) + stat) * (1 - 0.05 * (i - (stat + prof) - 1)))*3},
    `)
  }
}
const diceTest = () => {
  for (let i = 1.5; i <= 6.5; i++) {
    let scalingDamage = (i + stat + damageMods);
    normalDPR = scalingDamage * (1 - 0.05 * (10 - toHit - 1));
    ssDPR = (scalingDamage + 10) * (1 - 0.05 * (10 - (toHit - 5) - 1));
    console.log(`Dice average: ${i}, Normal: ${Math.round(normalDPR)}, Sharpshooter: ${Math.round(ssDPR)}.`);
    console.log(`Sharpshooter better? ${normalDPR < ssDPR ? 'Yes' : 'No'}`);
  }
}
ArmorTest()