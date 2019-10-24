import React, { MouseEventHandler } from "react";

export default class AddComment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { val: "Add your comment here!" };
  }

  render() {
    const { val } = this.state;
    return (
      <div>
        <textarea value={val}></textarea>
        <button
          onClick={(event: React.MouseEvent) => {
            const { target } = event;
            this.setState({ val: (target as HTMLTextAreaElement).value });
          }}
        >
          Add Comment
        </button>
      </div>
    );
  }
}
