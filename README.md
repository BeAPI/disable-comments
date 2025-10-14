# Disable Comments

A simple and lightweight WordPress plugin that completely disables comments functionality across your entire WordPress site.

## Description

This plugin disables all comments functionality in WordPress with no configuration needed. Simply activate the plugin and all comment features will be disabled.

## Features

### Core Functionality
- Disables comments on all post types (posts, pages, attachments, custom post types)
- Closes comments and trackbacks/pingbacks on the front-end
- Hides existing comments from displaying
- Automatically cleans up options from other comment disable plugins (one-time operation)

### Admin Interface
- Removes Comments menu from admin sidebar
- Redirects users trying to access the comments page
- Removes comments from admin bar (front-end and back-end)
- Removes comments metabox from dashboard
- Removes "At a Glance" dashboard widget with comment count
- Removes comments column from posts list

### Widgets & Scripts
- Removes Recent Comments widget
- Removes comment-reply script from front-end

### RSS & Feeds
- Disables comments feed (returns 403 error)
- Removes X-Pingback header from HTTP responses

### API & XML-RPC
- Disables XML-RPC methods for comments and pingbacks
  - `pingback.ping`
  - `pingback.extensions.getPingbacks`
  - `wp.newComment`
- Disables WordPress REST API comments endpoints
  - `/wp/v2/comments`
  - `/wp/v2/comments/{id}`
- Prevents comment insertion via REST API

### Gutenberg Block Editor
- Disables all 15 comment-related Gutenberg blocks:
  - Comment Author Name
  - Comment Content
  - Comment Date
  - Comment Edit Link
  - Comment Reply Link
  - Comment Template
  - Comments
  - Comments Pagination
  - Comments Pagination Next
  - Comments Pagination Numbers
  - Comments Pagination Previous
  - Comments Title
  - Latest Comments
  - Post Comments
  - Post Comments Form

### Multisite Support
- Works on WordPress Multisite installations
- Removes network comment links from admin bar

## Installation

1. Upload the `disable-comments` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. That's it! Comments are now completely disabled

## Requirements

- WordPress 5.0 or higher
- PHP 7.4 or higher

## Usage

This plugin works out of the box with no configuration needed. Once activated, all comment functionality will be disabled.

To re-enable comments, simply deactivate the plugin.

## Frequently Asked Questions

### Will this plugin delete existing comments?

No, this plugin does not delete any existing comments from your database. It simply hides them from displaying and prevents new comments from being submitted.

### Can I configure which features to disable?

This plugin is designed to be simple and lightweight with no configuration options. It disables all comment functionality when activated.

### Does this work with custom post types?

Yes, this plugin disables comments for all post types, including custom post types.

### Does this work with WordPress Multisite?

Yes, the plugin is fully compatible with WordPress Multisite installations and will work on individual sites or network-wide.

### Does this disable Gutenberg comment blocks?

Yes, the plugin disables all 15 comment-related Gutenberg blocks, preventing them from being inserted in the block editor.

### Does this block comments via REST API?

Yes, the plugin disables comment endpoints in the WordPress REST API and prevents comment insertion via API requests.

## Changelog

### 1.0.0
* Initial release

## License

GPL v2 or later

## Credits

Inspired by:
- [Disable Comments plugin](https://wordpress.org/plugins/disable-comments/) - The original WordPress.org plugin
- [WPBeginner Tutorial](https://www.wpbeginner.com/wp-tutorials/how-to-completely-disable-comments-in-wordpress/) - Comprehensive guide on disabling comments

## Author

BeAPI - [https://beapi.fr](https://beapi.fr)

