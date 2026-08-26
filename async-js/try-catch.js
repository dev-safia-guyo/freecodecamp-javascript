async function getUser(userid) {
  try {
      const user = await fetcUserData(userid);
      console.log("Got user.", user);
      return user;
 }  catch (error) {
    console.error("Failed to fetch user.", error.message);
} finally {
  console.log("Done attempting fetch");
  }
}
getUser(-1); // triggers the reject() branch in fetchUserData
