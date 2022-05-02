function navbar(){
    return`
    <div id="navbar">
      <h1><a href="index.html">News app</a></h1>
      <input type="text" id="search_input" placeholder="search here">
    </div>
    <div id="block_2">
      <div id="sidebar">
        <h2>Countries</h2>
        <h3 id="in" onclick="search(in)">India</h3>
        <h3 id="us" onclick="search(id)">Usa</h3>
        <h3 id="ch" onclick="search(id)">China</h3>
        <h3 id="uk" onclick="search(id)">UK</h3>
        <h3 id="nz" onclick="search(id)">New Zealand</h3>
      </div>
      <div id="results"></div>
    </div>
    `
}

export default navbar;