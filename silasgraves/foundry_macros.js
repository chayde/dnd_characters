// Silas Graves - Undead Squad Attack Roll
// Rolls 3 attacks at +5 (Rose, Thorn, Mook)
// Instructions: Create a new Macro in Foundry, set Type to 'Script', paste this code.

const attackBonus = 5;
const minions = [
    { name: "Rose 🏹", type: "Ranged" },
    { name: "Thorn 🏹", type: "Ranged" },
    { name: "Mook 🧟", type: "Melee" }
];

let messageContent = `<h3>💀 Undead Squad Attack!</h3><hr>`;

for (let minion of minions) {
    let r = new Roll(`1d20 + @bonus`, {bonus: attackBonus});
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
