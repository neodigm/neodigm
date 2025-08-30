# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Hugo Static Site Generation
```bash
# Build the site (using local hugo binary)
./hugo

# Deploy to interactive_resume repository
./deploy.sh
```

### 3D Asset Build (Three.js)
```bash
# Build 3D assets with webpack
cd 3d && npm run build
```

The 3D build process compiles Three.js modules from `3d/a55_3d_template.js` into `static/js/a55_3d.js` for use across the site.

## Architecture Overview

This is a **Hugo static site** serving as a technical portfolio/blog with interactive development tools and curated content collections.

### Site Structure
- **Hugo Framework**: Static site generator with custom layouts and partials
- **Content Types**: Four main content categories with specialized functionality
- **Interactive Tools**: Custom JavaScript applications embedded as Hugo content
- **Deployment**: Static files copied to separate `interactive_resume` repository

### Content Architecture

**Primary Content Sections:**
- `content/devtoys/` - Interactive web development utilities (responsive viewers, calculators, generators)
- `content/emerging_tech/` - Technology articles and curated link collections  
- `content/patterns/` - Code examples and programming patterns organized by technology
- `content/design/` - Design and 3D content (mostly drafts)

**Content File Format:**
- All content uses `.html` files with YAML frontmatter (not Markdown)
- Embedded HTML/JavaScript for interactive functionality
- Hugo shortcodes for syntax highlighting: `{{< highlight JavaScript >}}`

**Frontmatter Schema:**
```yaml
---
title: "Title"
date: YYYY-MM-DDTHH:MM:SS-07:00
draft: false
summary: "Brief description"
marquee: "UI scrolling text"
theme: "brand|night|primary|etc"
description: "SEO description"
categories: ["category1", "category2"]
tags: ["tag1", "tag2"] 
ampm: "dark|light"
---
```

### Layout System
- `layouts/index.html` - Homepage with carousel components
- `layouts/_default/single.html` - General content template
- `layouts/devtoys/single.html` - Specialized template for interactive tools
- `layouts/partials/` - Reusable carousel and UI components

### Special Features
- **Dynamic Content Loading**: External JSON data via `data-fetch-favs` attributes
- **Custom Theme System**: Multi-theme support with `data-n55-ampm-theme` attributes
- **Rich Structured Data**: JSON-LD implementation for SEO
- **Interactive Components**: Custom JavaScript tools embedded in content

### Asset Management
- **Thumbnails**: Follow `[slug]_tn.webp` naming convention
- **Static Assets**: Served from `static/` directory (mirrored to `public/`)
- **3D Assets**: Three.js bundles built via webpack
- **Media**: Video content in `static/video/`

### Taxonomy
- **Categories**: Broad content classification
- **Tags**: Detailed topic tagging  
- **Skills**: Custom taxonomy for competencies

## File Naming Conventions

**Content Files:**
- `devtoys/`: Descriptive tool names (e.g., `case_conversion.html`)
- `emerging_tech/`: Prefixed with `curated_links_[technology].html` for link collections
- `patterns/`: Technology-prefixed (e.g., `javascript_`, `css_`, `typescript_`)

**Assets:**
- Thumbnails: `[content-slug]_tn.webp`
- Images: Technology/content-specific directories

## Development Notes

- Hugo binary located at `./hugo` (not system-installed)
- Site configuration in `config.json` (JSON format, not TOML/YAML)
- Deploy script copies `public/*` to separate git repository
- 3D assets require webpack build before site generation
- Content creation uses archetypes in `/archetypes/` directory