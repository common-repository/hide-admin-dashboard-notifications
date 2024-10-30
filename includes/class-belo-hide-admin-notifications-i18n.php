<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://wpbelo.com
 * @since      1.0.2
 *
 * @package    Belo_Hide_Admin_Notifications
 * @subpackage Belo_Hide_Admin_Notifications/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.2
 * @package    Belo_Hide_Admin_Notifications
 * @subpackage Belo_Hide_Admin_Notifications/includes
 * @author     Belo <https://wpbelo.com>
 */
class Belo_Hide_Admin_Notifications_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.2
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'belo-hide-admin-notifications',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
