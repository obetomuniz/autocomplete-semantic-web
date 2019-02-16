describe "Semantic Web Autocomplete", ->
  [editor, provider] = []

  getCompletions = ->
    cursor = editor.getLastCursor()
    start = cursor.getBeginningOfCurrentWordBufferPosition()
    end = cursor.getBufferPosition()
    prefix = editor.getTextInRange([start, end])
    request =
      editor: editor
      bufferPosition: end
      scopeDescriptor: cursor.getScopeDescriptor()
      prefix: prefix
    provider.getSuggestions(request)

  beforeEach ->
    waitsForPromise -> atom.packages.activatePackage('autocomplete-semantic-web')
    waitsForPromise -> atom.packages.activatePackage('language-html')
    waitsForPromise -> atom.workspace.open('test.html')

    runs ->
      provider = atom.packages.getActivePackage('autocomplete-semantic-web').mainModule.getProvider()
    runs -> editor = atom.workspace.getActiveTextEditor()

  it "autocompletes attribute names with 'item' scope a.k.a Schema.org", ->
    editor.setText('<div item')
    editor.setCursorBufferPosition([0, 9])

    completions = getCompletions()
    expect(completions.length).toBe 3

  it "autocompletes attribute names with 'item' scope a.k.a Schema.org", ->
    editor.setText('<div itemprop="n"')
    editor.setCursorBufferPosition([0, 16])

    completions = getCompletions()
    expect(completions.length).toBe 23

  it "autocompletes attribute names with 'aria-' scope a.k.a WAI-ARIA", ->
    editor.setText('<div aria')
    editor.setCursorBufferPosition([0, 10])

    completions = getCompletions()
    expect(completions.length).toBe 35

  it "autocompletes attribute names with 'role' scope a.k.a WAI-ARIA", ->
    editor.setText('<div role')
    editor.setCursorBufferPosition([0, 10])

    completions = getCompletions()
    expect(completions.length).toBe 2

  it "autocompletes attribute names with 'typeof' scope a.k.a RDFa", ->
    editor.setText('<div typeof')
    editor.setCursorBufferPosition([0, 12])

    completions = getCompletions()
    expect(completions.length).toBe 1

  it "triggers autocomplete when an attibute has been inserted", ->
    spyOn(atom.commands, 'dispatch')
    suggestion = {type: 'attribute', text: 'whatever'}
    provider.onDidInsertSuggestion({editor, suggestion})

    advanceClock 1
    expect(atom.commands.dispatch).toHaveBeenCalled()

    args = atom.commands.dispatch.mostRecentCall.args
    expect(args[0].tagName.toLowerCase()).toBe 'atom-text-editor'
    expect(args[1]).toBe 'autocomplete-plus:activate'
