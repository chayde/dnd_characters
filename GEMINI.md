# GEMINI.md

## Project Overview

This repository is a centralized collection of **Dungeons & Dragons 5th Edition** character portfolios. It acts as a digital binder, containing character sheets, build plans, spellbooks, and combat cheatsheets for multiple active characters across different campaigns.

**Primary Ruleset:** D&D 5e (2024 Revision) is the default standard for updates unless a specific character's documentation states otherwise.

---

## Directory Structure & Character Roster

Each subdirectory represents a self-contained "project" for a specific character.

| Directory | Character | Class / Level | Theme / Archetype |
| :--- | :--- | :--- | :--- |
| **`bwaynebruce/`** | **Bwayne** | Paladin (Vengeance) 9 | **The Divine Enforcer.** Former mob enforcer turned Oath of Vengeance Paladin. Theme: Retribution, Urban Justice. |
| **`chancemcginty/`** | **`Chance McGinty`** | **`Monk (Open Hand) 3`** | **`The Roadside Brawler.`** A jovial Halfling traveler who challenges strangers to "test their luck." Theme: Luck, Speed, Agility. |
| **`hrimgarfrostborn/`** | **Hrimgar** | Ranger 2 / Druid (Sea) 7 | **The Winter Storm.** Frost Giant ancestry Goliath. Becomes a massive elemental force of ice and water. |
| **`klausvonstauffer/`** | **Klaus** | Fighter 2 / Wizard (Scribes) 7 | **The Iron Quill.** Armored "Tank Wizard" who treats magic like military artillery. Sentient Spellbook. |
| **`kramgor/`** | **Kram Gor** | Paladin (Conquest) 6 | **The Silent Winter.** Goliath Paladin of Auril. Theme: Fear, Cold, Silence. |
| **`silasgraves/`** | **Silas Graves** | Wizard (Necromancer) 7 | **The Benevolent Lich.** Rock Gnome Necromancer who treats undead as companions. |
| **`vesper/`** | **Vesper** | Druid (Stars) 9 | **The Cosmic Vessel.** Small Scourge Aasimar channeling the terrifying power of the cosmos. |

---

## Operational Guidelines

### 1. Context Isolation
*   **Scoped Context:** When asked to work on a specific character, primarily reference the files within that character's specific subdirectory.
*   **Shared Knowledge:** While characters are separate, they may share mechanical synergies (e.g., two characters might be in the same "Icewind Dale" campaign like Kram and Hrimgar?). However, treat them as independent entities unless instructed to cross-reference.

### 2. File Conventions
*   **Source of Truth:** The main `.md` file (e.g., `character-sheet.md`, `[Name]_CharacterSheet.md`) is the definitive record for stats.
*   **Cheatsheets:** `combatcheatsheet.md` files are derivative "dashboard" views for gameplay. Always update them when the main sheet changes (e.g., after a level up).
*   **Images:** Character portraits are stored locally within the character's folder.

### 3. Common Tasks
*   **Leveling Up:**
    1.  Update the main character sheet (HP, Hit Dice, Features, Spell Slots).
    2.  Update the `combatcheatsheet.md` (Save DCs, Attack Bonuses, new Actions).
    3.  Update the build plan/progression guide if one exists.
*   **Spell Management:**
    *   Verify spell descriptions against 2024 PHB rules.
    *   Ensure prepared spell counts match the formula: `Level + Modifier` (for prep casters).

### 4. Technical Constraints
*   **No Code:** This is a documentation repository. There are no build scripts or compilers.
*   **Markdown:** Maintain clean, readable Markdown formatting. Use tables for stats and clear headers for features.

### 5. Technical & Version Control
*   **Git Sync:** **CRITICAL.** After modifying any file, changes must be committed and pushed to GitHub immediately to ensure the remote repository is always current.

---

# Character Specific Contexts

## 💀 Silas Graves (Wizard - Necromancer)

### Overview
Silas is a Level 7 Rock Gnome Wizard (Necromancer) in a *Curse of Strahd* campaign.
*   **Philosophy:** "Benevolent Necromancer" (Neutral Good). Views necromancy as extending the time a soul has to fulfill its purpose. Treats undead (Rose, Thorn, Mook) as companions.
*   **Role:** Controller / Utility / Off-Tank (via Undead).

### Operational Rules
*   **Undead Companions:** Silas maintains a permanent retinue via *Animate Dead*. Stats scale with **Wizard Level**:
    *   **HP Bonus:** +Wizard Level
    *   **Damage Bonus:** +Proficiency Bonus
    *   *Current Stats (Lvl 7):* +7 HP, +3 Damage.
*   **File Sync:** Updating `character-sheet.md` requires syncing `spells.md`, `combatcheatsheet.md`, and `build-plan.md`.

### Foundry VTT Macros
**Mage Armor Toggle:**
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

---

## 🍀 Chance McGinty (Monk - Warrior of the Open Hand)

### Overview
Chance is a Level 3 Halfling Monk in a general setting.
*   **Philosophy:** A jovial, traveling brawler who runs a "Test Your Luck" contest on the roadside.
*   **Role:** Mobile Striker / Control.
*   **Key Mechanic:** "The Luck Engine" — Halfling Luck (reroll 1s) + Lucky Feat + Sap Mastery (Spear).

### Tactical Guidelines
*   **Crowd Control:** Use *Open Hand Technique* to Topple (Prone) or Addle (No Reactions).
*   **Survivability:** Combined *Sap* mastery with *Deflect Attack* to be deceptively tanky despite low HP.
*   **Social:** Proficient in Dice Sets and Brewer's Supplies for social engineering.

---

## ❄️ Kram Gor (Paladin - Conquest)

### Overview
Kram Gor is a Level 6 Goliath Paladin (Oath of Conquest) in *Icewind Dale: Rime of the Frostmaiden*.
*   **Deity:** Auril, the Frostmaiden.
*   **Backstory:** Former "Path of the World Tree" Barbarian who died and was resurrected by Auril. He traded the warm voice of the Tree for the cold silence of the Frostmaiden.
*   **Theme:** Ice, Silence, Fear, Conquest, Endurance.

### Rules & Mechanics (2024 Revision)
*   **Divine Smite:** Bonus Action spell, once per turn.
*   **Channel Divinity:** 2 uses per Short Rest.
*   **Weapon Masteries:** Cleave (Greataxe), Graze (Greatsword).

### Roleplay & Voice
*   **Voice:** Kram speaks rarely. Sentences are short, direct, and pragmatic. He is not cruel, but unyielding like winter.
    *   *Good:* "Silence falls." / "You break." / "Winter takes you."
    *   *Bad:* Long monologues, fiery passion, hesitation.
*   **Party Dynamics:**
    *   **Inara (Warlock):** His anchor to humanity. Protective.
    *   **Loam (Cleric):** A new source of warmth he is learning to accept.

### Thematic Consistency
*   **Flavor Text:** Describe abilities using imagery of frost, ice, silence, shattering glaciers, and numbing cold.
*   **Frostmaiden's Brand:** On inner left forearm, glows when casting.