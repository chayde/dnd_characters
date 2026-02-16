/* ------------------------------------------------------------
 * Silas Graves - Foundry VTT Macros
 * 
 * VERSION HISTORY:
 * v1.3 (2026-02-15): Added 'Undead Squad Damage (CRIT)' macro with 2d6.
 * v1.2 (2026-02-15): Updated 'Undead Squad Damage Roller' to show detailed 
 *                   breakdown for each hit (Dice + Bonus) in chat.
 * v1.1 (2025): Added 'Undead Squad Attack (ADVANTAGE)' macro.
 * v1.0 (2025): Initial 'Undead Squad Attack' and 'Damage' macros.
 * ------------------------------------------------------------ */

// 1. Silas Graves - Undead Squad Attack Roll
const attackBonus = 5;
const minions = [
    { name: "Rose", type: "Ranged" },
    { name: "Thorn", type: "Ranged" },
    { name: "Yip", type: "Ranged" },
    { name: "Yap", type: "Ranged" }
];

let messageContent = `<h3>💀 Undead Squad Attack!</h3><hr>`;

for (let minion of minions) {
    let r = new Roll(`1d20 + ${attackBonus}`);
    await r.evaluate();
    const d20 = r.terms[0].total;
    let color = "black";
    let extra = "";
    if (d20 === 20) { color = "green"; extra = " <b>(CRIT!)</b>"; }
    else if (d20 === 1) { color = "red"; extra = " <b>(MISS)</b>"; }

    messageContent += `
    <div style="font-size: 1.1em; margin-bottom: 4px;">
        <strong>${minion.name}:</strong>
        <span style="color: ${color}; font-weight: bold; border: 1px solid #333; padding: 2px 6px; border-radius: 4px; background: #eee;">
            ${r.total}
        </span>${extra}
    </div>`;
}

ChatMessage.create({
    content: messageContent,
    speaker: ChatMessage.getSpeaker({alias: "Silas Graves"})
});

/* ------------------------------------------------------------ */

// 2. Silas Graves - Undead Squad Attack (ADVANTAGE)
const attackBonusAdv = 5;
const minionsAdv = [
    { name: "Rose", type: "Ranged" },
    { name: "Thorn", type: "Ranged" },
    { name: "Yip", type: "Ranged" },
    { name: "Yap", type: "Ranged" }
];

let messageContentAdv = `<h3>💀 Undead Squad (Advantage)!</h3><hr>`;

for (let minion of minionsAdv) {
    let r = new Roll(`2d20kh + ${attackBonusAdv}`);
    await r.evaluate();
    const naturalRoll = r.total - attackBonusAdv;
    let color = "black";
    let extra = "";
    if (naturalRoll === 20) { color = "green"; extra = " <b>(CRIT!)</b>"; }
    else if (naturalRoll === 1) { color = "red"; extra = " <b>(MISS)</b>"; }

    messageContentAdv += `
    <div style="font-size: 1.1em; margin-bottom: 4px;">
        <strong>${minion.name}:</strong>
        <span style="color: ${color}; font-weight: bold; border: 1px solid #333; padding: 2px 6px; border-radius: 4px; background: #eef;">
            ${r.total}
        </span>${extra}
    </div>`;
}

ChatMessage.create({
    content: messageContentAdv,
    speaker: ChatMessage.getSpeaker({alias: "Silas Graves"})
});

/* ------------------------------------------------------------ */

// 3. Silas Graves - Undead Squad Damage Roller (NORMAL)
let d = new Dialog({
  title: "💀 Undead Squad Damage",
  content: `
    <form>
      <div class="form-group">
        <label>How many skeletons hit?</label>
        <input type="number" name="hits" value="1" autofocus/>
      </div>
    </form>
  `,
  buttons: {
    roll: {
      icon: '<i class="fas fa-dice-d20"></i>',
      label: "Roll Damage",
      callback: (html) => {
        let hits = parseInt(html.find('[name="hits"]').val());
        rollSkeletonDamage(hits);
      }
    }
  },
  default: "roll"
}).render(true);

async function rollSkeletonDamage(hits) {
    if (hits <= 0) return;
    const damageFormula = "1d6 + 6";
    const bonus = 6;
    let totalDamage = 0;
    let rollResults = [];
    for (let i = 0; i < hits; i++) {
        let r = new Roll(damageFormula);
        await r.evaluate();
        totalDamage += r.total;
        rollResults.push({
            dice: r.terms[0].total,
            total: r.total
        });
    }
    let messageContent = `
    <h3>💀 Skeleton Damage (${hits} Hits)</h3>
    <hr>
    <div style="margin-bottom: 10px;">
    `;
    for (let i = 0; i < rollResults.length; i++) {
        let res = rollResults[i];
        messageContent += `
        <div style="display: flex; justify-content: space-between; align-items: center; border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9; margin-bottom: 4px;">
            <span style="font-size: 0.9em;">Hit ${i+1}: 🎲 <b>${res.dice}</b> + <b>${bonus}</b></span>
            <span style="font-weight: bold; color: darkred; font-size: 1.1em;">= ${res.total}</span>
        </div>`;
    }
    messageContent += `</div><hr>
    <div style="font-size: 1.4em; font-weight: bold; text-align: center; color: darkred;">
        Total: ${totalDamage} Damage
    </div>`;
    ChatMessage.create({
        content: messageContent,
        speaker: ChatMessage.getSpeaker({alias: "Silas Graves"})
    });
}

/* ------------------------------------------------------------ */

// 4. Silas Graves - Undead Squad Damage Roller (CRIT)
let dCrit = new Dialog({
  title: "💀 Undead Squad CRIT Damage",
  content: `
    <form>
      <div class="form-group">
        <label>How many skeletons crit?</label>
        <input type="number" name="hits" value="1" autofocus/>
      </div>
    </form>
  `,
  buttons: {
    roll: {
      icon: '<i class="fas fa-dice-d20"></i>',
      label: "Roll Crit Damage",
      callback: (html) => {
        let hits = parseInt(html.find('[name="hits"]').val());
        rollSkeletonCritDamage(hits);
      }
    }
  },
  default: "roll"
}).render(true);

async function rollSkeletonCritDamage(hits) {
    if (hits <= 0) return;
    const damageFormula = "2d6 + 6";
    const bonus = 6;
    let totalDamage = 0;
    let rollResults = [];
    for (let i = 0; i < hits; i++) {
        let r = new Roll(damageFormula);
        await r.evaluate();
        totalDamage += r.total;
        rollResults.push({
            dice: r.terms[0].total,
            total: r.total
        });
    }
    let messageContent = `
    <h3>💀 Skeleton CRIT Damage (${hits} Crits)</h3>
    <hr>
    <div style="margin-bottom: 10px;">
    `;
    for (let i = 0; i < rollResults.length; i++) {
        let res = rollResults[i];
        messageContent += `
        <div style="display: flex; justify-content: space-between; align-items: center; border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9; margin-bottom: 4px;">
            <span style="font-size: 0.9em;">Crit ${i+1}: 🎲 <b>${res.dice}</b> + <b>${bonus}</b></span>
            <span style="font-weight: bold; color: darkred; font-size: 1.1em;">= ${res.total}</span>
        </div>`;
    }
    messageContent += `</div><hr>
    <div style="font-size: 1.4em; font-weight: bold; text-align: center; color: darkred;">
        Total Crit: ${totalDamage} Damage
    </div>`;
    ChatMessage.create({
        content: messageContent,
        speaker: ChatMessage.getSpeaker({alias: "Silas Graves"})
    });
}