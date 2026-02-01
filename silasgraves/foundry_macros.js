// Silas Graves - Undead Squad Attack Roll
// IMPORTANT: Ensure Macro Type is set to 'Script' (not 'Chat') below the macro name.

const attackBonus = 5;
const minions = [
    { name: "Rose", type: "Ranged" },
    { name: "Thorn", type: "Ranged" },
    { name: "Yip", type: "Ranged" },
    { name: "Yap", type: "Ranged" }
];

let messageContent = `<h3>💀 Undead Squad Attack!</h3><hr>`;

for (let minion of minions) {
    // Using template literal for simple bonus to avoid data object issues
    let r = new Roll(`1d20 + ${attackBonus}`);
    await r.evaluate();

    // Check for Crit/Fumble on the d20 (first term)
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