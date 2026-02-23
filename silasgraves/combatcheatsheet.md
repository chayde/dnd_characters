# Combat Dashboard ⚔️ - Level 8 Necromancer

## Quick Stats
| Category | Notes |
|-----------|--------|
| **Armor Class** | 15 (Mage Armor) / 20 (with Shield reaction) |
| **Initiative** | +2 |
| **Speed** | 25 ft. |
| **HP** | 58 |
| **Spell Save DC** | 16 (8 + 3 prof + 5 INT) |
| **Spell Attack Bonus** | +8 (+3 prof + 5 INT) |
| **Grim Harvest** | Heal 2× spell level on kill (3× for Necromancy spells) |

## Offensive Power
| Spell/Attack | Damage/Effect | Notes |
|--------------|---------------|-------|
| **Toll the Dead** | 2d12 (injured) / 2d8 | Wis Save. Best cantrip damage. |
| **Chill Touch** | 2d10 Necrotic | Melee (Touch). Stops healing. |
| **Darkbolt** (2nd) | 3d10 Cold | Ranged Attack. DC 16 Con or lose Reaction. |
| **Fireball** (3rd) | 8d6 Fire | Dex Save. 20ft radius. |
| **Vampiric Touch** (3rd) | 3d6 Necrotic | Melee. Heal half damage. |
| **Summon Undead** (3rd) | Varies | Ghost/Skeleton/Putrid. Concentration. |
| **Polymorph** (4th) | Transform | Giant Ape (Ally) or Turtle/Frog (Enemy). |
| **Remove Curse** (3rd) | Utility | End all curses on touch. |

## Undead Companions (Undead Thralls: +8 HP, +3 Dmg)
| Name | Type | AC | HP | Attack | Damage | Note |
|------|------|----|----|--------|--------|------|
| **Rose** | Skeleton | 13 | 21 | +6 | 1d6+6 | Shortbow (Range 80/320) |
| **Thorn** | Skeleton | 13 | 21 | +6 | 1d6+6 | Shortbow (Range 80/320) |
| **Yip** | Skeleton | 13 | 21 | +6 | 1d6+6 | Shortbow (Range 80/320) |
| **Yap** | Skeleton | 13 | 21 | +6 | 1d6+6 | Shortbow (Range 80/320) |
| **Mook** | Zombie | 8 | 30 | +4 | 1d6+4 | Melee Tank (Undead Fortitude) |

---

## Defensive & Stealth Utility
*   **False Life:** Gain 1d4+4 Temporary HP (Cast once/day free via feat).
*   **Invisibility:** Become invisible (Cast once/day free via feat).
*   **Mage Armor:** Base defense (AC 15).
*   **Shield:** Reaction to boost AC to 20.
*   **Mirror Image:** No-concentration defensive duplicates.
*   **Remove Curse:** End debilitating curses.

---

## Standard Combat Routine

### Round 1: Setup & Control
*   **Action:** 
    *   *Need a Minion?* **Summon Undead** (Concentration).
    *   *Big Threat?* **Polymorph** (Enemy -> Frog) or **Hypnotic Pattern**.
    *   *Swarm?* **Fireball**.
    *   *Defense Needed?* **Mirror Image** (No concentration).
*   **Bonus Action:** Command Undead ("Attack!").
*   **Reaction:** Save for **Counterspell** or **Shield**.

### Round 2+: Sustain & Damage
*   **Attack:** Use *Darkbolt*, *Toll the Dead*, or *Vampiric Touch*.
*   **Utility:** Use *Misty Step*, *Invisibility*, or *Remove Curse*.

---

## Daily & Rest Cheatsheet

### Daily Maintenance
1.  **Undead:** Cast *Animate Dead* (3rd level) twice or once with a higher slot to maintain control of Rose, Thorn, Yip, Yap, and Mook.
2.  **Armor:** Cast *Mage Armor* (1st level).
3.  **Bolster:** Cast *False Life* (Free via Shadow Touched).
4.  **Scout:** Send Ink (Raven) ahead.

### Short Rest
*   **Arcane Recovery:** Recover up to **4 levels** of slots (e.g., one 4th-level slot).

### Long Rest
*   **Prepare Spells:** Select 13 spells.
*   **Reset:** Regain all slots (4/3/3/2) and HP.

---

## Foundry VTT Macros 🛠️

**Undead Squad Attack (Script Macro):**
*Full script saved in `foundry_macros.js`*
- Rolls 3 attacks (+5) for Rose, Thorn, and Mook simultaneously.
- Detects Crits and Fumbles.

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