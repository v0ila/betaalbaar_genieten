function handleDeactivation(e, reservation_id, overbooked) {
  if (arguments.length > 1 && reservation_id) {
    var confirmCheckedOut = confirm("This equipment is currently checked " +
      "out. If you continue then reservation #"+reservation_id+" will be " +
      "archived. Do you want to proceed?")
  } else {
    var confirmCheckedOut = true
  }
  if (confirmCheckedOut == true && arguments.length > 2 && overbooked.length > 0) {
    var confirmOverbooked = confirm("This equipment will be overbooked " +
      "over the coming week from "+overbooked[0]+" to " +
      overbooked[overbooked.length-1]+". Are you sure you want to continue?")
  }
  else {
    var confirmOverbooked = true
  }
  if (confirmCheckedOut == true && confirmOverbooked == true) {
    var reason = prompt("Write down the reason for deactivation of this " +
      "equipment item.")
    if (reason == null) {
      e.href += "?deactivation_cancelled=1"
    } else if (reason != "") {
      e.href += "?deactivation_reason=" + encodeURIComponent(reason)
    }
  }
  else {
    e.href += "?deactivation_cancelled=1"
  }
};

function handleBigDeactivation(e, res_count, item_str) {
  if (arguments.length > 1 && res_count > 0) {
    var confirmDeactivation = confirm("There is/are currently " +
      res_count + " reservation(s) for this " + item_str + " over the " +
      "coming week. Are you sure you want to continue?")
  } else {
    confirmDeactivation = true
  }
  if (confirmDeactivation == true) {
    e.href += "?deactivation_confirmed=1"
  } else {
    e.href += "?deactivation_cancelled=1"
  }
};