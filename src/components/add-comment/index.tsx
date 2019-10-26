import React, { MouseEventHandler, KeyboardEventHandler } from "react";

export default class AddComment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { val: "Add your comment here!" };
  }

  render() {
    const { val } = this.state;
    return (
      <div>
        <textarea
          onChange={({target:HTMLTEXT}) => {}}
          value={val}
        ></textarea>
        <button
          onClick={(event: React.MouseEvent) => {
            const { target } = event;
            console.log((target as HTMLTextAreaElement).value);
            this.setState({ val: (target as HTMLTextAreaElement).value });
          }}
        >
          Add Comment
        </button>
      </div>
    );
  }
}
