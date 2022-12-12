//write your code here
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let f = 0; f < noun.length; f++) {
      console.log(pronoun[i] + adj[j] + noun[f] + ".com");
    }
  }
}

//excuse.innerHTML = pronoun + " " + adj + " " + noun;
