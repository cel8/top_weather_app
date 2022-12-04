import 'Style/style.css'; // TODO: style it
import UiController from 'View/ui-controller';

const uiController = new UiController();

window.onload = () => {
  uiController.doLoadUI();
};
