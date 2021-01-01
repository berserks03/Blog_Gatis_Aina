import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../button/button';
import { AddUserComments } from '../../store/commentsReducer/commentsActions';
import './commentInput.scss';

type CommentInputProps = {
  postId: number | undefined;
  currentCommentArrayLength: number;
};

export const CommentInput: FC<CommentInputProps> = ({
  postId,
  currentCommentArrayLength
}) => {
  const [userTitle, setUserTitle] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userComment, setUserComment] = useState('');
  const [noUserTitle, setNoUserTitle] = useState(false);
  const [noUserEmail, setNoUserEmail] = useState(false);
  const [noUserComment, setNoUserComment] = useState(false);
  const [emailWrong, setEmailWrong] = useState(false);

  const dispatch = useDispatch();

  const pattern =
    new RegExp(/^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/i);

  const submitCommentHandler = () => {
    !userEmail ? setNoUserEmail(true) : setNoUserEmail(false);
    !userTitle ? setNoUserTitle(true) : setNoUserTitle(false);
    !userComment ? setNoUserComment(true) : setNoUserComment(false);

    if (!pattern.test(userEmail)) {
      setEmailWrong(true);
      return;
    }

    if (userTitle && userEmail && userComment) {
      setEmailWrong(false);

      const newComment = {
        postId,
        id: currentCommentArrayLength? currentCommentArrayLength + 1 : 1,
        name: userTitle,
        email: userEmail,
        body: userComment,
      };

      dispatch(AddUserComments(newComment));

      setUserTitle('');
      setUserEmail('');
      setUserComment('');

      setNoUserTitle(false);
      setNoUserEmail(false);
      setNoUserComment(false);
    }
  };

  return (
    <div className="CommentInput">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h3>Join the discussion!</h3>
            <form action="submit_comment" className="CommentInput__form">
              {noUserEmail ? <span className="error-message">Email ir required!</span> : ''}
              {emailWrong ? <span className="error-message">Please enter valid email address</span> : ''}
              <input
                className="CommentInput__input"
                type="email"
                placeholder="Enter your email"
                required
                value={userEmail}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setUserEmail(ev.target.value)}
              />
              {noUserTitle ? <span className="error-message">Short title ir required!</span> : ''}
              <input
                className="CommentInput__input"
                type="text"
                placeholder="Enter short title of your comment"
                required
                value={userTitle}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                  setUserTitle(ev.target.value)}
              />
              {noUserComment ? <span className="error-message">Comment ir required!</span> : ''}
              <textarea
                className="CommentInput__input"
                placeholder="Write your comment"
                required
                value={userComment}
                onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
                  setUserComment(ev.target.value)}
              />
              <Button
                text="Add comment"
                onClick={submitCommentHandler}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};