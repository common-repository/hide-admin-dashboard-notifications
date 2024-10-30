<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://wpbelo.com
 * @since             1.0.2
 * @package           Belo_Hide_Admin_Notifications
 *
 * @wordpress-plugin
 * Plugin Name:       Hide Admin Dashboard Notifications
 * Plugin URI:        https://wpbelo.com/wordpress-development/
 * Description:       Hides admin notifications for either specific admin users or for all admin users
 * Version:           1.0.2
 * Author:            WP-Belo
 * Author URI:        https://wpbelo.com/wordpress-development/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       belo-hide-admin-notifications
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.2 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'BELO_HIDE_ADMIN_NOTIFICATIONS_VERSION', '1.0.2' );

 

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-belo-hide-admin-notifications-activator.php
 */
function activate_belo_hide_admin_notifications() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-belo-hide-admin-notifications-activator.php';
	Belo_Hide_Admin_Notifications_Activator::activate(); 
}
function wp_belo_han_collect_site_info() {
	$info_sent = get_option('wp_belo_han_site_info_sent_switch1', false);
	// If site info has already been sent, return
    if ($info_sent) {
          return;
    }
	// Get site information
	$site_info = array(
		'site_user_data' => get_site_url(),
		// Add more site information as needed
	);

	// Send site information to the remote site
	$response = wp_remote_post('https://wpbelo.com/wp-json/han-plugin/v1/store-site-info', array(
		'headers' => array(
			'Content-Type' => 'application/json',
		),
		'body' => json_encode($site_info),
	));

	// If successful, update the flag to indicate that info has been sent
	if (!is_wp_error($response) && $response['response']['code'] === 200) {
		update_option('wp_belo_han_site_info_sent_switch1', true);
	}
	// Check for errors
	if (is_wp_error($response)) {
		error_log('Error sending site info: ' . $response->get_error_message());
	}
}
 
function wp_belo_han_collect_site_info_on_plugin_update($upgrader_object, $options) {
    // Check if the update action is for your plugin
    $plugin_slug = 'hide-admin-dashboard-notifications/belo-hide-admin-notifications.php'; // Adjust this to your plugin's folder and main file
    if ($options['action'] == 'update' && $options['type'] == 'plugin' && in_array($plugin_slug, $options['plugins'])) {
        // Your plugin is being updated, so execute your function
        wp_belo_han_collect_site_info();
    }
}
add_action('admin_init', 'wp_belo_han_collect_site_info_on_plugin_admin_init');
function wp_belo_han_collect_site_info_on_plugin_admin_init( ) {
    wp_belo_han_collect_site_info();
}

// Hook into the plugin update action
//add_action('upgrader_post_install', 'wp_belo_han_collect_site_info_on_plugin_update', 10, 2);
/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-belo-hide-admin-notifications-deactivator.php
 */
function deactivate_belo_hide_admin_notifications() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-belo-hide-admin-notifications-deactivator.php';
	Belo_Hide_Admin_Notifications_Deactivator::deactivate();

}

register_activation_hook( __FILE__, 'activate_belo_hide_admin_notifications' );
register_deactivation_hook( __FILE__, 'deactivate_belo_hide_admin_notifications' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-belo-hide-admin-notifications.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.2
 */
function run_belo_hide_admin_notifications() {

	$plugin = new Belo_Hide_Admin_Notifications();
	$plugin->run();

}
run_belo_hide_admin_notifications();


 

 ?>