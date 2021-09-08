const userData = usersData.map (
  item =>
    item.owner.username &&
      item.owner.profile_img_url &&
      item.seller.username &&
      item.seller.profile_img_url &&
      item.seller.address
      ? {
          ownerUsername: item.owner.username,
          ownerPic: item.owner.profile_img_url,
          creatorUsername: item.seller.username,
          creatorPic: item.seller.profile_img_url,
          creatorAddress: item.seller.address
        }
      : null
);

//map template for user function in seed.js
