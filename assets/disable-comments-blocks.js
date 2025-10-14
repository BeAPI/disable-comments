/**
 * Unregister comment-related Gutenberg blocks.
 *
 * @package DisableComments
 */

( function() {
	// Wait for the blocks to be registered.
	wp.domReady( function() {
		// Check if required WordPress APIs are available.
		if ( ! wp.blocks || ! wp.data ) {
			return;
		}

		// List of comment-related blocks to unregister.
		const commentsBlocks = [
			'core/comment-author-name',
			'core/comment-content',
			'core/comment-date',
			'core/comment-edit-link',
			'core/comment-reply-link',
			'core/comment-template',
			'core/comments',
			'core/comments-pagination',
			'core/comments-pagination-next',
			'core/comments-pagination-numbers',
			'core/comments-pagination-previous',
			'core/comments-title',
			'core/latest-comments',
			'core/post-comments',
			'core/post-comments-form',
		];

		// Unregister each comment block if it exists.
		commentsBlocks.forEach( function( blockName ) {
			if ( wp.data.select( 'core/blocks' ).getBlockType( blockName ) ) {
				wp.blocks.unregisterBlockType( blockName );
			}
		} );
	} );
} )();

