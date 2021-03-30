# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]


## [1.1] - 2021-03-30

This release requires a full modpack re-download. To re-download the modpack, import a new MultiMC instance and enter the following URL: `https://woofmc.xyz/Wolfpack-Odin`

### Added
- Backpacked
- Backpacker
- Bamboo Everything
- Entity Culling
- Extra Storage
- Immersive Engineering
- Login Shield
- Refined Storage Addons
- Thermal Innovation
- Thermal Locomotion
- Trash Cans
- Travel Anchors
- Dynamic Surroundings
- Aquaculture
- More Sound Config
- Advanced Chimneys
- Valhelsia Structures

### Changed
Main Server IP (from `odin.kalka.io` to `woofmc.xyz`)
Dynamic Map in favor of BlueMap (view the new map [here](https://woofmc.xyz/map/8100/))

### Removed
- Titles
- Ding
- Sound Filters

## [1.0.3] - 2021-03-19
### Added
- Titles

### Changed
- Update Forge to `36.1.1`
- WorldEdit has been remapped to serverside only
- Flushed the Odin config to only retain mod configs that require custom values before first launch

### Removed
- **Mod**: Environmental
- **Mod**: More Overlays
- **Mod**: Dynamic Surroundings temporarily, as a result of [this issue](https://github.com/OreCruncher/DynamicSurroundings/issues/696).
- **Mod**: Storage Drawers temporarily, due to immense console spam as a result of a misconfiguration in the mod internally, which can only be fixed by the mod author.
- **Mod**: More Overlays (Light Overlay already exists)

## [1.0.2] - 2021-03-16
### Changed
- Update Forge to stable `36.1.0`
- Revamp the Drone config

## [1.0.1] - 2021-03-15
### Added
- Badge to README
- Surveying the auto builder


## [1.0.0] - 2021-03-15
### Added
- Added CHANGELOG
- Updated README
- Refactor the modpack to include less scripts for the client. The update script is now its own repository, [Wolfpackmaker](https://git.kalka.io/kalka/wolfpackmaker).
- Convert to the new repo (old messy version is located under https://git.kalka.io/kalka/wolfpack-odin)



[Unreleased]: https://git.kalka.io/kalka/wolfpack-odin/compare/v1.0.0...HEAD
[1.0.0]: https://git.kalka.io/Wolfpack/Odin/src/tag/1.0.0
[1.0.1]: https://git.kalka.io/Wolfpack/Odin/src/tag/1.0.1
[1.0.2]: https://git.kalka.io/Wolfpack/Odin/compare/1.0.1...1.0.2
[1.0.3]: https://git.kalka.io/Wolfpack/Odin/compare/1.0.2...1.0.3
[1.1]: https://git.kalka.io/Wolfpack/Odin/compare/1.0.3...1.1