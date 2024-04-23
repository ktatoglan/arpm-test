public function createPost($authorId, $title, $categoryId)
{
  // Validate title existence for the author
  $this->validateUniqueTitle($authorId, $title);

  // Create a new post
  $post = new BlogPost([
    'title' => $title,
    'author_id' => $authorId,
    'status' => 'published',
  ]);

  $post->save();

  // Associate the post with the category
  $post->categories()->attach($categoryId);

  return "Post created successfully!";
}

private function validateUniqueTitle($authorId, $title)
{
  if (BlogPost::where('author_id', $authorId)->where('title', $title)->exists()) {
    throw new Exception("Title already exists.");
  }
}