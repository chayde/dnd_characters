# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a D&D 5e 2024 character build project for a starting-level spellcaster character (levels 1-4).

## File Structure

- `character-sheet.md` - Core character statistics, abilities, proficiencies, and equipment
- `build-plan.md` - Character optimization strategy, level progression, and mechanical choices
- `spells.md` - Spell selections, prepared spells, and tactical usage notes
- `background-story.md` - Character backstory, personality, bonds, flaws, and roleplaying notes

## D&D 5e 2024 Rules Reference

When working with this character:
- Follow the 2024 D&D 5th Edition rules (Player's Handbook 2024)
- Starting ability scores use point buy (27 points) or standard array (15, 14, 13, 12, 10, 8)
- Character advancement follows the standard XP/milestone progression
- Spell preparation and slot usage follows 2024 rules updates

## Character Development Workflow

When modifying the character:
1. Update `character-sheet.md` for mechanical changes (stats, proficiencies, equipment)
2. Update `build-plan.md` when making optimization decisions or planning future levels
3. Update `spells.md` when changing spell selections or learning new spells
4. Keep `background-story.md` aligned with character mechanical choices

## Optimization Principles

- Prioritize fun and engaging gameplay over pure optimization
- Balance combat effectiveness with out-of-combat utility
- Ensure the character fits well in a typical adventuring party
- Consider both mechanical effectiveness and roleplaying opportunities

## Foundry VTT Configuration

**Mage Armor Toggle Macro:**
Use the following JavaScript snippet in a Script macro to toggle Mage Armor AC (13 + Dex) in the dnd5e system:
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
