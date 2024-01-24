"use server";

const headers = {
  Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
};

const url = new URL("https://api.unsplash.com/photos");
url.searchParams.set("per_page", "9");
url.searchParams.set("order_by", "popular");

export const getImages = async () => {
  return await fetch(url, {
    headers,
    next: {
      revalidate: 86400,
    },
  });
};

export const getImage = async (id: string) => {
  return await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers,
    next: {
      revalidate: 86400,
    },
  });
};
