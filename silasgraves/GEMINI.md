# Gemini Context for Silas Graves

This repository serves as the comprehensive digital character sheet and development log for **Silas Graves**, a Level 7 Rock Gnome Wizard (Necromancer) playing in a *Curse of Strahd* campaign.

## Directory Overview

The project is structured to track mechanical statistics, spellcasting, campaign progress, and future build planning. It functions as a "living" character document.

### Key Files

*   **`character-sheet.md`**: The primary source of truth. Contains Ability Scores, HP, Equipment, Features, and full Companion stats. Update this file first when leveling up or changing gear.
*   **`combatcheatsheet.md`**: The operational "Dashboard" for use during sessions. Contains a quick-reference Stat Block, specific Combat Tactics (e.g., handling Spiders/Driders), Daily Routines, and VTT Macros.
*   **`spells.md`**: Detailed spellbook tracking. Contains the list of known spells, descriptions (updated to 2024 rules), and pre-set "Preparation Lists" (Combat vs. Exploration).
*   **`build-plan.md`**: The roadmap for character advancement (Level 1-20). Documents the rationale behind choices like feats, ASIs, and spell selections.
*   **`session-notes.md`**: A chronological log of campaign events, loot gained, and mysteries uncovered.
*   **`currentstatus.md`**: A meta-log of changes made to the *repository files* themselves (e.g., "Updated to Level 7 stats").

## Operational Conventions

### 1. Ruleset Adherence
*   **System:** D&D 5th Edition (**2024 Revision**).
*   **Crucial Updates:** Ensure all spell descriptions (e.g., *Counterspell*, *Sleep*, *Chill Touch*) and racial traits reflect the 2024 Player's Handbook changes.

### 2. File Synchronization
Information is cross-referenced across multiple files. When making a change (e.g., Level Up), you **must** update:
1.  `character-sheet.md` (Level, HP, Slots, Proficiency)
2.  `spells.md` (New spells, slot counts, prepared limit)
3.  `combatcheatsheet.md` (HP, Undead stats, tactics)
4.  `build-plan.md` (Mark level as complete, update future plans)

### 3. Undead Companions
Silas maintains a permanent retinue via *Animate Dead*. Their stats change based on his **Wizard Level** (Undead Thralls feature):
*   **HP Bonus:** +Wizard Level
*   **Damage Bonus:** +Proficiency Bonus
*   *Current Stats (Lvl 7):* +7 HP, +3 Damage.

### 4. Technical & Version Control
*   **Foundry VTT:** The project includes specific JavaScript macros for Foundry VTT (see `combatcheatsheet.md`).
*   **Git Sync:** **CRITICAL.** After modifying any file, changes must be committed and pushed to GitHub immediately to ensure the remote repository is always current.

## Character Identity
*   **Philosophy:** Silas is a "benevolent necromancer" (Neutral Good). He views necromancy as extending the time a soul has to fulfill its purpose. He treats his undead (Rose, Thorn, Mook) as companions, not tools.
*   **Role:** Controller / Utility / Off-Tank (via Undead).
