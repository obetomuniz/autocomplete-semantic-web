const COMPLETIONS = require('../completions.json');

function isBoolean(attribute) {
  return (
    COMPLETIONS.attributes[attribute] &&
    COMPLETIONS.attributes[attribute].type &&
    COMPLETIONS.attributes[attribute].type === 'boolean'
  );
}

function isSchemaOrg(attribute) {
  return (
    COMPLETIONS.attributes[attribute] &&
    COMPLETIONS.attributes[attribute].schema &&
    COMPLETIONS.attributes[attribute].schema === 'true'
  );
}

function getAttributeNameCompletions(tag, prefix) {
  const completions = [];
  const tagAttributes = getTagAttributes(tag);

  for (const attribute of tagAttributes) {
    if (firstCharsEqual(attribute, prefix)) {
      const options = COMPLETIONS.attributes[attribute];
      if (isBoolean(attribute)) {
        completions.push({
          snippet: `${attribute}`,
          displayText: attribute,
          type: 'attribute',
          rightLabel: `<${tag}>`,
          description: `${attribute} attribute local to <${tag}> tags`
        });
      } else if (isSchemaOrg(attribute)) {
        completions.push({
          snippet: `${attribute}=\"http\:\/\/schema.org\/$1\"$0`,
          displayText: attribute,
          type: 'attribute',
          rightLabel: `<${tag}>`,
          description: `${attribute} attribute local to <${tag}> tags`
        });
      } else {
        completions.push({
          snippet: `${attribute}="$1"$0`,
          displayText: attribute,
          type: 'attribute',
          rightLabel: `<${tag}>`,
          description: `${attribute} attribute local to <${tag}> tags`
        });
      }
    }
  }

  for (const attribute in COMPLETIONS.attributes) {
    const options = COMPLETIONS.attributes[attribute];
    if (options.global && firstCharsEqual(attribute, prefix)) {
      if (isBoolean(attribute)) {
        completions.push({
          snippet: `${attribute}`,
          displayText: attribute,
          type: 'attribute',
          rightLabel: `<${tag}>`,
          description: `${attribute} attribute local to <${tag}> tags`
        });
      } else if (isSchemaOrg(attribute)) {
        completions.push({
          snippet: `${attribute}=\"http\:\/\/schema.org\/$1\"$0`,
          displayText: attribute,
          type: 'attribute',
          rightLabel: `<${tag}>`,
          description: `${attribute} attribute local to <${tag}> tags`
        });
      } else {
        completions.push({
          snippet: `${attribute}="$1"$0`,
          displayText: attribute,
          type: 'attribute',
          rightLabel: `<${tag}>`,
          description: `${attribute} attribute local to <${tag}> tags`
        });
      }
    }
  }

  return completions;
}

function getAttributeValueCompletions(tag, attribute, prefix) {
  const completions = [];

  const values = getAttributeValues(tag, attribute);
  for (const value of values) {
    if (firstCharsEqual(value, prefix)) {
      completions.push(buildAttributeValueCompletion(tag, attribute, value));
    }
  }

  return completions;
}

function buildAttributeValueCompletion(tag, attribute, value) {
  if (COMPLETIONS.attributes[attribute].global) {
    return {
      text: value,
      type: 'value',
      description: `${value} value for global ${attribute} attribute`
    };
  } else {
    return {
      text: value,
      type: 'value',
      rightLabel: `<${tag}>`,
      description: `${value} value for ${attribute} attribute local to <${tag}>`
    };
  }
}

function getAttributeValues(tag, attribute) {
  let result = COMPLETIONS.attributes[`${tag}/${attribute}`];
  if (result && result.attribOption) return result.attribOption;
  result = COMPLETIONS.attributes[attribute];
  if (result && result.attribOption) return result.attribOption;
  return [];
}

function getTagAttributes(tag) {
  let result = COMPLETIONS.tags[tag];
  if (result && result.attributes) return result.attributes;
  return [];
}

function firstCharsEqual(a, b) {
  if (b.length === 0) return true;
  return a[0].toLowerCase() === b[0].toLowerCase();
}

module.exports = {
  getAttributeNameCompletions,
  getAttributeValueCompletions
};
