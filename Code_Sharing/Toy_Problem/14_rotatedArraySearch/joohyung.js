const rotatedArraySearch = function (rotated, target) {
  let start = 0;
  let end = rotated.length - 1;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);

    if (rotated[mid] === target) {
      return mid;
    }
    //타겟이 좌측에 있을 때. 좌측에 있을 때는 당연히,
    //좌측 배열의 끝 === mid 보다는 작아야(mid가 아니라는 가정하에)되고 배열의 처음과 같거나 커야 된다.
    if (rotated[start] < rotated[mid]) {
      if (rotated[start] <= target && target < rotated[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      //타겟이 우측에 있을 때.
      if (rotated[mid] < target && target <= rotated[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
