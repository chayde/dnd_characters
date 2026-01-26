// Silas Graves - Undead Squad Attack Roll
// Rolls attacks for the squad (Rose, Thorn, Kid wolf1, Kid wolf2)
// Instructions: Create a new Macro in Foundry, set Type to 'Script', paste this code.

const attackBonus = 5;
const minions = [
    { name: "Rose", type: "Ranged" },
    { name: "Thorn", type: "Ranged" },
    { name: "Kid wolf1", type: "Ranged" },
    { name: "Kid wolf2", type: "Ranged" }
];

let messageContent = `<h3>💀 Undead Squad Attack!</h3><hr>`;

// We build the message first, then send it
for (let minion of minions) {
    let r = new Roll(`1d20 + @bonus`, {bonus: attackBonus});
    await r.evaluate();

    // Check for Crit/Fumble on the d20 term
    const d20 = r.terms[0].total;
    let color = "black";
    let extra = "";
    if (d20 === 20) { color = "green"; extra = " <b>(CRIT!)</b>"; }
    else if (d20 === 1) { color = "red"; extra = " <b>(MISS)</b>"; }

    // Add line to message
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