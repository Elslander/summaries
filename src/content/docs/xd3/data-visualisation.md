---
title: Data Visualistaion
description: data visualisation
---

## The data

#### CSV

- Comma Separated Values
- The first row contains headers.
- 'dumb' Excel file
- Interchangeable
- Doesn't need to be _comma_ separated

#### CSV in Excel

'text to columns' button

#### CSV in Google Sheets

- File -> import -> upload
- Detect automatically

#### Data Normalisation

> The process of organising data to reduce redundancy and improve data integrity.

- 1 field (column), 1 value per record
- Remove duplocate rows
- Handle missing values appropriately (blanks, NULL, or specific indocators)
- Ensure consistent data types withing columns.
- Validate date formats (ISO 8601: YYYY-MM-DD recommended)
- Trim whitespace from text fields

#### Locales

- Check the settings of the spreadsheet
- `,` or `.`
  - Numbers or string value?

#### Multiple answers...

- This is terrible
- But realistic

#### Normalise multiple choice - 'split'

- `=split`
- Can be useful if order is important

#### Normalise multiple choice - 'regexmatch'

- If the options are fixed
- Create a column for each option
- Selected? Value = 1, otherwise = 0
- 'binary table' format

`=IF(REGEXMATCH([combined field], [column heading]), 1, 0)`

#### Create a column for each option

`=transpose(unique(flatten(ARRAYFORMULA(trim(split([range], "-"))))))`

- **transpose**: rows to columns
- **unique**: make the results unique
- **flatten**: make it one column
- **arrayformula**: apply this formula on every item in the array
- **trim**: remove whitespace
- **split**: split it on every '-'

#### Other

- **countifs**: count depending on multiple criteria
- **vlookup**: combine data from other range
- **correl**: correlation coefficient of a dataset

### Wide vs Long table

#### Wide tables

- Convenient for entry but harder to summarise

#### Unpivot

- Long table instead of wide 
- No easy 'unpivot' in Google Sheets
- Unpivor in Excel via Power Query
- There are other tools
- CSV -> VS Code -> Copilot
  - For small datasets

### Pivot tables

#### Pivot

- A pivot table is a powerful tool to calculate, summarise, and analyse data.
- GroupBy and count
- Discover comparisons, patterns, and trends in your data.

#### Pivot power

- Try it
- Can be overwhelming at first
- Analyse the suggestions (Google Sheets)

## The visualisation

#### Line chart

- Displaying trends over time
- Showing continuous data
- Comparing multiple series over the same time period
- Highlighting rate of change

#### Bar chart

- Comparing categories/groups/...
- Showing rankings or ordered data

#### Pie chart

- Showing parts of a whole (percentages)
- Displaying simple proportions
- Emphasising one segment compared to the total

#### Scatter plot

- Showing relationships between two variables
- Identifying correlations
- Detecting outliers
- Displaying disruption patterns

#### Histogram

- Distribution of a single numeric ariable by grouping data into "bins" (ranges)
- Identifying skewness or normal distribution
- Detecting outliers in ranges

#### Sankey diagram

- Too cool not to mention
- Visualise an amount in different stages

### Tools

- Google Sheets
  - Data optimising
  - Basic charts
- Excel
  - Superpowers
  - Overwhelming
- makegraph.app
- datawrapper.de
- rawgraphs.io
- flourish.studio
  - Also: stories