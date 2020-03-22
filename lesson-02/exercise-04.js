// Exercise 04: Rewrite with async/await. Show the final result to the teacher.

async function loadJson(url) {
    let response = await fetch(url)
    if (response.status == 200) {
      return response.json();
    }

    throw new Error(response.status);
}
