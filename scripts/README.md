# Portfolio Document Generators

This directory contains scripts to generate portfolio documents in different formats.

## Installation

First, install the required dependencies:

```bash
npm install
```

## Usage

### Generate PDF (Recommended)

Run the script to generate a PDF file:

```bash
npm run generate-pdf
```

The generated file will be saved to `output/portfolio.pdf` in the project root.

### Generate ODF

Run the script to generate an ODF file:

```bash
npm run generate-odf
```

The generated file will be saved to `output/portfolio.odt` in the project root.

## Output

Both scripts create professional portfolio documents that include:

- Personal information (name, title, email, location)
- About Me section
- Skills & Technologies (Frontend, Backend, Mobile, Others)
- Projects with descriptions, technologies, and dates
- Work Experience with detailed descriptions and tech stacks

### PDF Format
- Can be opened with any PDF reader
- Universally compatible
- Perfect for sharing and printing

### ODF Format
- Can be opened with:
  - LibreOffice Writer
  - Microsoft Word
  - Google Docs (upload)
  - Any ODF-compatible application

