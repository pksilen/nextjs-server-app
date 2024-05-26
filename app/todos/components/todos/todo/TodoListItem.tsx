import clsx from 'clsx';
import { IconOrButton } from '@/app/todos/common/components/buttons/IconOrButton';
import {
  CheckIcon,
  EditIcon,
  RemoveIcon,
  TodoIcon
} from '@/app/todos/common/components/icons/Icons';
import { EditTextInput } from '@/app/todos/common/components/inputs/EditTextInput';
import { ListItem } from '@/app/todos/common/components/list/ListItem';
import { ListItemIcon } from '@/app/todos/common/components/list/ListItemIcon';
import { ListItemText } from '@/app/todos/common/components/list/ListItemText';
import { Todo } from '@/app/todos/stores/todos/Todo';
import classes from './TodoListItem.module.scss';
import { useTodo } from './useTodo';

type Props = {
  readonly todo: Todo;
};

export const TodoListItem = ({ todo: { id, title, isDone } }: Props) => {
  const { editTodo, isEditable, removeTodo, setAsEditableTodo, toggleTodoDone } = useTodo(id);

  return (
    <ListItem className={classes.todo}>
      <ListItemIcon icon={<TodoIcon color={isDone ? 'success' : 'error'} />} />
      {isEditable ? (
        <EditTextInput aria-label="Edit todo" onEditComplete={editTodo} text={title} />
      ) : (
        <ListItemText
          className={clsx(classes.title, isDone && classes.isDone)}
          onDoubleClick={setAsEditableTodo}
          text={title}
        />
      )}
      <div className={classes.buttons}>
        <IconOrButton
          icon={<CheckIcon />}
          onClick={toggleTodoDone}
          text={isDone ? 'Mark undone' : 'Mark done'}
        />
        <IconOrButton icon={<EditIcon />} onClick={setAsEditableTodo} text="Edit" />
        <IconOrButton icon={<RemoveIcon />} onClick={removeTodo} text="Remove" />
      </div>
    </ListItem>
  );
};
