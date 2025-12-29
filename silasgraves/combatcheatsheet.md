# Combat Dashboard ⚔️ - Level 7 Necromancer

## Quick Stats
| Category | Notes |
|-----------|--------|
| **Armor Class** | 15 (Mage Armor) / 20 (with Shield reaction) |
| **Initiative** | +2 |
| **Speed** | 25 ft. |
| **HP** | 51 |
| **Spell Save DC** | 15 (8 + 3 prof + 4 INT) |
| **Spell Attack Bonus** | +7 (+3 prof + 4 INT) |
| **Grim Harvest** | Heal 2× spell level on kill (3× for Necromancy spells) |

## Offensive Power
| Spell/Attack | Damage/Effect | Notes |
|--------------|---------------|-------|
| **Toll the Dead** | 2d12 (injured) / 2d8 | Wis Save. Best cantrip damage. |
| **Chill Touch** | 2d10 Necrotic | Melee (Touch). Stops healing. |
| **Darkbolt** (2nd) | 3d10 Cold | Ranged Attack. DC 15 Con or lose Reaction. |
| **Fireball** (3rd) | 8d6 Fire | Dex Save. 20ft radius. |
| **Vampiric Touch** (3rd) | 3d6 Necrotic | Melee. Heal half damage. |
| **Polymorph** (4th) | Transform | Giant Ape (Ally) or Turtle/Frog (Enemy). |

## Undead Companions (Undead Thralls: +7 HP, +3 Dmg)
| Name | Type | AC | HP | Attack | Damage | Note |
|------|------|----|----|--------|--------|------|
| **Rose** | Skeleton | 13 | 20 | +5 | 1d6+5 | Shortbow (Range 80/320) |
| **Thorn** | Skeleton | 13 | 20 | +5 | 1d6+5 | Shortbow (Range 80/320) |
| **Mook** | Zombie | 8 | 29 | +4 | 1d6+4 | Melee Tank (Undead Fortitude) |

---

## Current Tactics: Spiders & Driders
*   **Spider Swarms:** Use **Fireball** (3rd level) to delete clusters.
*   **Driders:** High AC/Health. Use **Polymorph** (4th level) to turn them into a Turtle (remove from fight) or turn a dying ally into a Giant Ape.
*   **Webbing:** If Restrained, use **Misty Step** to escape instantly (teleport breaks grapple/restrain).
*   **Undead:** Send Mook to tank Driders; Rose & Thorn shoot spiders.

---

## Standard Combat Routine

### Round 1: Setup & Control
*   **Action:** 
    *   *Big Threat?* **Polymorph** (Enemy -> Frog) or **Hypnotic Pattern**.
    *   *Swarm?* **Fireball**.
    *   *Defense Needed?* **Mirror Image** (No concentration).
*   **Bonus Action:** Command Undead ("Attack!").
*   **Reaction:** Save for **Counterspell** or **Shield**.

### Round 2+: Sustain & Damage
*   **Attack:** Use *Darkbolt* (Single Target) or *Toll the Dead*.
*   **Heal/Sustain:** Use *Vampiric Touch* if you are hurt.
*   **Utility:** Use *Misty Step* to reposition.

---

## Daily & Rest Cheatsheet

### Daily Maintenance
1.  **Undead:** Cast *Animate Dead* (3rd level) to maintain control of Rose, Thorn, and Mook.
2.  **Armor:** Cast *Mage Armor* (1st level).
3.  **Scout:** Send Ink (Raven) ahead.

### Short Rest
*   **Arcane Recovery:** Recover up to **4 levels** of slots (e.g., one 4th-level slot).
*   **Grim Harvest:** Resets (1/turn, but ability refreshes constantly? No, Grim Harvest is passive 1/turn. Arcane Recovery is 1/day).

### Long Rest
*   **Prepare Spells:** Select 11 spells.
*   **Reset:** Regain all slots (4/3/3/1) and HP.

---

## Foundry VTT Macros 🛠️
**Mage Armor Toggle (Script Macro):**
```javascript
const actor = canvas.tokens.controlled[0]?.actor || game.user.character;
if (!actor) return ui.notifications.warn("Please select a token!");
const isMageArmor = actor.system.attributes.ac.calc === "mage";
if (isMageArmor) {
    await actor.update({"system.attributes.ac.calc": "default"});
    ui.notifications.info("Mage Armor OFF (Returning to Default)");
} else {
    await actor.update({"system.attributes.ac.calc": "mage"});
    ui.notifications.info("Mage Armor ON (13 + Dex)");
}
```