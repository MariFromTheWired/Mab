const SUPABASE_URL =
"https://atiiettvcisvexbytedj.supabase.co/rest/v1/";

const SUPABASE_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0aWlldHR2Y2lzdmV4Ynl0ZWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNDAwNTksImV4cCI6MjA5NDcxNjA1OX0.hxE85URIUyFwzGomfr8DuBY47a8cUklvop-ZXsEOPdM";

const supabase =
window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function createThread(){

  const author =
  document.getElementById("author").value;

  const title =
  document.getElementById("title").value;

  const content =
  document.getElementById("content").value;

  await supabase
  .from("threads")
  .insert([{

    author,
    title,
    content

  }]);

  loadThreads();
}

async function loadThreads(){

  const { data } =
  await supabase

  .from("threads")

  .select("*")

  .order(
    "created_at",
    { ascending:false }
  );

  console.log(data);
}

await supabase
.from("replies")
.insert([{

  thread_id:threadId,

  author,

  message

}]);