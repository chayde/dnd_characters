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
