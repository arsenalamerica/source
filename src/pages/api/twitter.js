import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import getFetchUrl from '../../utils/getFetchUrl';

const userId = process.env.TWITTER_USER_ID;
const bearerToken = process.env.TWITTER_BEARER_TOKEN;

const url = `https://api.twitter.com/2/users/${userId}/tweets`;
const params = {
  exclude: ['replies'],
  expansions: ['attachments.media_keys', 'author_id', 'referenced_tweets.id'],
  'media.fields': ['alt_text', 'height', 'preview_image_url', 'url', 'width'],
  'tweet.fields': ['attachments', 'referenced_tweets', 'author_id', 'text'],
  'user.fields': ['profile_image_url', 'url', 'username'],
};
const headers = {
  Authorization: `Bearer ${bearerToken}`,
};

const fetchUrl = getFetchUrl(url, params);

export default async (req, res) => {
  const response = await fetch(fetchUrl, {
    method: 'GET',
    headers,
  });
  const results = await response.json();

  // Get the data and includes objects from our API results
  const { data, includes } = results;

  // Get the users and media arrays so we can attach them to individual data objects
  const { users, media, tweets } = includes;

  const getMedia = (key) => media.find(({ media_key }) => media_key === key);

  const tweetsWithMedia = tweets.map(({ attachments, ...rest }) => ({
    ...rest,
    media: attachments?.media_keys.map((key) => getMedia(key)),
  }));

  const tweetData = data.map(
    ({ attachments, author_id, referenced_tweets, ...rest }) => ({
      ...rest,
      author: users.find(({ id }) => id === author_id),
      media: attachments?.media_keys.map((key) => getMedia(key)),
      referenced_tweets: referenced_tweets?.map(({ id, type }) => ({
        type,
        ...tweetsWithMedia.find(({ id: tweetId }) => tweetId === id),
      })),
    })
  );
  return res.status(200).json({ data: tweetData });
};
